import { users } from "../data/users.js"
import DataError from "../models/dataError.js"
import ValidationControls from "../shared/validationControls.js"
export default class EmployeeService {
    constructor() {
        this.employees = []
        this.validationControls = new ValidationControls()
    }

    load() {
        const failedForEmployees = users.filter(user => user.type !== "employee" &&
            user.salary)

        users.filter(user => user.type === "employee").map(user => {
            if (!this.validationControls.checkAnyErrorsForUsers(user)) {
                this.employees.push(user)
            } else {
                this.validationControls.errors.push(new DataError("Wrong user type", user))
            }
        })

        failedForEmployees.map(employee => {
            this.validationControls.errors.push(new DataError("Wrong user type", employee))
        })
    }

    add(user) {
        if (user.type !== 'employee') {
            this.validationControls.errors.push(new DataError("This user can not be added. Wrong user type", user))
            return;
        }
        if (!this.validationControls.checkAnyErrorsForUsers(user)) {
            this.employees.push(user)
        }
    }
}