import { createSlice } from "@reduxjs/toolkit";

const initialState = {

        user:{}
            
    
}

export const Auth = createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        showuser: (state) =>{
            return state;
        },
        logout: () => {
            return initialState;
        },
        Login:(state=initialState, action) => {
         return {
            user:action.payload
         }
        } 

    }


})

export const {showuser, Login,logout} = Auth.actions;
export default Auth.reducer;
