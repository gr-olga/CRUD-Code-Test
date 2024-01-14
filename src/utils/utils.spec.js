import {isBankAccountNumberValid, isEmailUnique, isUserExist} from "@/utils/utils";

describe('Utils', () => {
    describe('isUserExist', () => {

        const user = {
            firstName: 'John',
            lastName: 'Doe',
            dateOfBirth: '1990-01-01'
        };

        it('should return true if user exist', () => {
            const users = [{...user}]
            expect(isUserExist(user, users)).toBe(true);
        });

        it('should return true if user has the same firstName, lastName and dateOfBirth', () => {
            const users = [{
                firstName: 'John',
                lastName: 'Doe',
                dateOfBirth: '1990-01-01'
            }]
            expect(isUserExist(user, users)).toBe(true);
        });

        it('should return false if user has the not all fields the same', () => {
            const users = [{
                firstName: 'QQQQ',
                lastName: 'Doe',
                dateOfBirth: '1990-01-01'
            }]
            expect(isUserExist(user, users)).toBe(false);
        });

        it('should return true if user exist among other users', () => {
            const user2 = {firstName: 'Jane', lastName: 'Doe', dateOfBirth: '1990-01-01'};
            const user3 = {firstName: 'John', lastName: 'Smith', dateOfBirth: '1990-01-01'};
            const users = [user, user2, user3]
            expect(isUserExist(user, users)).toBe(true);
        });

        it('should return false if user does not exist', () => {
            const users = []
            expect(isUserExist(user, users)).toBe(false);
        });
    });

    describe('isEmailUnique', () => {
        const user1 = {firstName: 'Anna', lastName: 'Hoe', dateOfBirth: '2000-01-01', email: 'aaa@tt.com'};
        const user2 = {firstName: 'Jane', lastName: 'Doe', dateOfBirth: '1990-01-01', email: 'rrr@tt.com'};
        const user3 = {firstName: 'John', lastName: 'Smith', dateOfBirth: '1990-01-01', email: 'ddd@tt.com'};
        const users = [user1, user2, user3]

        it('should return true if email is unique', () => {
            expect(isEmailUnique('fff@gg.com', users)).toBe(true);
        })

        it('should return false if email is not unique', () => {
            expect(isEmailUnique(user1.email, users)).toBe(false);
        })
    });

    describe('isBankAccountNumberValid', () => {
        it('should return true if bank account number is valid', () => {
            expect(isBankAccountNumberValid('123456789012')).toBe(true);
        });

        it('should return false if bank account number is invalid because is to short', () => {
            expect(isBankAccountNumberValid('12345678901')).toBe(false);
        })
        it('should return false if bank account number is invalid because is to long', () => {
            expect(isBankAccountNumberValid('1234567890123')).toBe(false);
        })
        it('should return false if bank account number is invalid because it has a letters', () => {
            expect(isBankAccountNumberValid('123456789A')).toBe(false);
        })
        it('should return false if bank account number is invalid because it has a letters', () => {
            expect(isBankAccountNumberValid('123456789a12')).toBe(false);
        })
    });
});