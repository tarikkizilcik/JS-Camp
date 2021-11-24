import { users } from "../data/users.js"
import DataError from "../models/dataError.js"
import ValidationControls from "../shared/validationControls.js"
export default class CustomerService {
    constructor() {
        this.customers = []
        this.validationControls = new ValidationControls()
    }

    load() {
        const failedForCustomers = users.filter(user => user.type !== "customer" &&
            user.creditCardNumber)

        users.filter(user => user.type === "customer").map(user => {
            if (!this.validationControls.checkAnyErrorsForUsers(user))
                this.customers.push(user)
        })

        failedForCustomers.map(customer => {
            this.validationControls.errors.push(new DataError("Wrong user type", customer))
        })
    }

    add(user) {
        if (user.type !== 'customer') {
            this.validationControls.errors.push(new DataError("This user can not be added. Wrong user type", user))
            return;
        }
        if (!this.validationControls.checkAnyErrorsForUsers(user)) {
            this.customers.push(user)
        }
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