import {isUserExist} from "@/utils/utils";

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
});