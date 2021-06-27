import {createSlice} from "@reduxjs/toolkit"


const authSlice = createSlice({
    name:"auth",
    initialState:{
        userData:null,
        isLoggedIn:false,
        authHeaders:{}
    },
    reducers: {
        loginUser(state,action){
            state.userData=action.payload.userData;
            state.isLoggedIn=true;
            state.authHeaders=action.payload.authHeaders;

            // set user data to local storage
            localStorage.setItem("userData",JSON.stringify(
            {user:action.payload.userData,headers:action.payload.authHeaders}))
        },
        logoutUser(state){
            state.userData=null;
            state.authHeaders={};
            state.isLoggedIn=false;
            localStorage.removeItem("userData");
        }
    }
})

export const authActions = authSlice.actions;

export default authSlice;