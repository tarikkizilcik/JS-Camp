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

    listCustomers() {
        return this.customers;
    }

    getCustomerById(id) {
        return this.customers.find(c => c.id === id)
    }

    getCustomersSorted() {
        return this.customers.sort((customer1, customer2) => {
            if (customer1.firstName < customer2.firstName) {
                return -1;
            } else if (customer1.firstName === customer2.firstName) {
                return 0;
            } else {
                return 1;
            }
        })
    }
}