const GET_AUTH_STATUS = 'GET-AUTH-STATUS'
const GET_USER = 'GET-USER'
const initialState = {
    isAuth: false,
    user: {}
}

const actionReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_AUTH_STATUS:
            return {
                ...state,
                isAuth: action.isAuth
            }
            case GET_USER:
                return {
                    ...state,
                    user: action.user
                }
                default:
                    return state
    }
}
export const isAuthActionCreator = (isAuth) => {
    return {
        type: GET_AUTH_STATUS,
        isAuth: isAuth
    }
}
export const getUserActionCreator = (user) => {
    return {
        type: GET_USER,
        user: user
    }
}
export default actionReducer;