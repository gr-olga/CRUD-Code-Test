import {createStore} from "vuex";

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
            state.users = [...state.users, {...user}];
        },
    }
})