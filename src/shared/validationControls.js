import DataError from "../models/dataError.js"

export default class ValidationControls {
    constructor() {
        this.errors = []
    }
    checkAnyErrorsForUsers(user) {
        if (user.type === 'customer') {
            const customerRequiredFields = "id firstName lastName age city".split(" ")
            let hasErrors = false;
            customerRequiredFields.map(field => {
                if (!user[field]) {
                    hasErrors = true;
                    this.errors.push(new DataError(`Validation problem. ${field} is required`, user))
                }
            })
            if (user.age) {
                if (Number.isNaN(Number.parseInt(+user.age))) {
                    hasErrors = true
                    this.errors.push(new DataError(`Validation problem. ${user.age} is not an age`, user))
                }
            }
            return hasErrors
        }
        if (user.type === 'employee') {
            const employeeRequiredFields = "id firstName lastName age city salary".split(" ")
            let hasErrors = false;
            employeeRequiredFields.map(field => {
                if (!user[field]) {
                    hasErrors = true;
                    this.errors.push(new DataError(`Validation problem. ${field} is required`, user))
                }
            })
            if (user.age) {
                if (Number.isNaN(Number.parseInt(+user.age))) {
                    hasErrors = true
                    this.errors.push(new DataError(`Validation problem. ${user.age} is not an age`, user))
                }
            }
            return hasErrors
        }
    }
}