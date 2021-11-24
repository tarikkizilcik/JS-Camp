import { MongoLogger } from "../crossCuttingConcerns/logging/logger.js";
import Customer from "../models/customer.js";
import UserService from "../services/userService.js"

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

userService.load()

let customerToAdd = new Customer(7, "Seda", "Yılmaz", "Ankara", "29", 65465)
customerToAdd.type = 'customer';
userService.add(customerToAdd)
console.log(userService);
// console.log(userService.customers);
// console.log(userService.employees);
// console.log(userService.errors);
// console.log(userService.getCustomersSorted());
// console.log("--------------------------------")
// customerService.load()
// employeeService.load()
// console.log(userService);