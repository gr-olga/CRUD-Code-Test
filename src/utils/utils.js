export function isUserExist(user, users) {
    return users.some(({firstName, lastName, dateOfBirth, email}) => firstName === user.firstName && lastName === user.lastName && dateOfBirth === user.dateOfBirth && email === user.email
    );
}
export function isEmailUnique(email, users) {
    return !users.some(user => user.email === email);
}

export function isBankAccountNumberValid(bankAccountNumber) {
    return /^\d{12}$/.test(bankAccountNumber)
}