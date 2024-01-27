import { configureStore } from "@reduxjs/toolkit";
import Auth from "./features/auth_slice";

const store= configureStore({
    reducer:{
        AuthReducer: Auth
    }
})

export default store