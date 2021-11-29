import { MongoLogger } from "../crossCuttingConcerns/logging/logger.js";
import Customer from "../models/customer.js";
import UserService from "../services/userService.js"

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

userService.load()

let customerToAdd = new Customer(7, "Seda", "Yılmaz", "Ankara", "29", 65465)
customerToAdd.type = 'customerr';
userService.add(customerToAdd)
console.log("For the whole Service: ");
console.log(userService);
console.log("For Customer Users: ");
console.log(userService.customerService.customers);
console.log("For Employee Users: ");
console.log(userService.employeeService.employees);
console.log("Error(s) for Customer Users: ");
console.log(userService.customerService.validationControls.errors);
console.log("Error(s) for Employee Users: ");
console.log(userService.employeeService.validationControls.errors);
console.log("Verified User List: ");
console.log(userService.listAllUsers())
console.log("Search by Id: ");
console.log(userService.getUserById(3));
// console.log("Sorted Customers: ");
// console.log(userService.customerService.getCustomersSorted());
// console.log("Sorted Employees: ");
// console.log(userService.employeeService.getEmployeesSorted());

console.log("------------------");

console.log(userService.getAllUsersSorted())