export function isUserExist(user, users) {
    return users.some(({firstName, lastName, dateOfBirth}) => firstName === user.firstName && lastName === user.lastName && dateOfBirth === user.dateOfBirth
    );
}
