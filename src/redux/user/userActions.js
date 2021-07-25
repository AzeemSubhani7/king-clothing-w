import { userActionsTypes } from "./userTypes"
export const setCurrentUser = ( user ) => {
    return {
        type: userActionsTypes.SET_CURRENT_USER,
        payload: user
    }
}