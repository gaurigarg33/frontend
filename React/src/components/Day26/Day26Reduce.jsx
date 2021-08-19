import { updateEmail, updateUserName , updatePassword } from "./Day26ActionType";

const initalState = {
    username: '',
    email: '',
    password:''
}

export const userFromReducer = (state = initalState, action) => {
    switch (action.type) {
        case updateUserName:
            return {
                ...state,
                username: action.payload
            }
        case updateEmail:
            return {
                ...state,
                email: action.payload
            }

            case updatePassword:
            return {
                ...state,
                password: action.payload
            }
        default:
            return state
    }
}