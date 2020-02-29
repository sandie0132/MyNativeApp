import { Map } from 'immutable'
import actions from "./actions";




const initState = new Map({
    data : null,
    token : null,
    userName : null,
    errMsg : null,
    userRegistered : false,
  });
export default function LoginReducer (state = initState, action) {
    console.log("action inside reducer-------->", state)
  switch (action.type) {
    case actions.REGISTER_NEW_USER:
    return state.set("data" , action.data)
    case actions.NEW_USER_REGISTERED_SUCCESSFULLY:
        console.log("111111111111111111")
        return state.set("userRegistered" , true)
    // .set("token", action.data.token.accessToken)
    case  actions.NEW_USER_REGISTER_ERROR:
        return state.set("errMsg" ,  action.data)
    default:
     return state;
       }
     };