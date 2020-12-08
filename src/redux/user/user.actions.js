import {UserActionTypes} from '../user.types'

export const setCurrentUser = (user) => ({
    type: UserActionTypes.SET_CURRENTUSER,
    payload: user
})