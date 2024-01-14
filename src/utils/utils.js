export function isUserExist(user, users) {
    return users.some(({firstName, lastName, dateOfBirth}) => firstName === user.firstName && lastName === user.lastName && dateOfBirth === user.dateOfBirth
    );
}
export function isBankAccountNumberValid(bankAccountNumber) {
    return /^\d{12}$/.test(bankAccountNumber)
}