import {createStore} from "vuex";

// interface UserType {
//     firstName: string
//     lastName: string
//     dateOfBirth: string
//     phoneNumber: number
//     email: string
//     bankAccountNumber: string
// }
//
// interface StateType {
//     users: UserType[]
// }

export const store = createStore({
    state() {
        return {
            users: [
                    {
                        firstName: "John",
                        lastName: "Doe",
                        dateOfBirth: "1990-01-01",
                        phoneNumber: 1234567890,
                        email: "john@gmail.com",
                        bankAccountNumber: "1234567890123456"
                    }
            ]
        };
    },

mutations: {
    setUsers(state, user) {
        state.users = [...state.users, user];
    },}
})