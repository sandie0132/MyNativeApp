const loginActions = {
    REGISTER_NEW_USER : "REGISTER_NEW_USER",
NEW_USER_REGISTERED_SUCCESSFULLY : "NEW_USER_REGISTERED_SUCCESSFULLY",
NEW_USER_REGISTER_ERROR : "NEW_USER_REGISTER_ERROR",
registerNewUser : (data)=> ({
    type : loginActions.REGISTER_NEW_USER,
    data
})
}
export default loginActions