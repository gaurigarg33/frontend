import { updateEmail, updateUserName ,updatePassword} from "./Day26ActionType";


const updateUserNameInput = (data) => {
    return {
        type: updateUserName,
        payload: data
    }
}


const updateEmailInput = (data) => {
    return {
        type: updateEmail,
        payload: data
    }
}

const updatePasswordInput = (data) => {
    return {
        type: updatePassword,
        payload: data
    }
}



export { updateUserNameInput, updateEmailInput , updatePasswordInput}