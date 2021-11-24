import { users } from "../data/users.js";
import CustomerService from "./customerService.js"
import EmployeeService from "./employeeService.js"

export default class UserService {

    constructor() {
        this.customerService = new CustomerService();
        this.employeeService = new EmployeeService();
    }

    load() {
        this.customerService.load();
        this.employeeService.load();
    }

    add(user) {
        if (user.type === 'customer' || user.creditCardNumber) {
            this.customerService.add(user);
        }
        if (user.type === 'employee' || user.salary) {
            his.employeeService.add(user);
        }
    }

    listAllUsers() {
        const verifiedUsers = [];
        verifiedUsers.push(this.customerService.customers)
        verifiedUsers.push(this.employeeService.employees)
        return verifiedUsers;
    }

    getUserById(id) {
        const isUserCustomer = this.customerService.customers.find(customer => customer.id === id);
        const isUserEmployee = this.employeeService.employees.find(employee => employee.id === id)
        if (isUserCustomer) {
            return isUserCustomer
        }
        else if (isUserEmployee) {
            return isUserEmployee
        } else {
            return "No registered user with such an ID was found. Please try something else."
        }
    }
}