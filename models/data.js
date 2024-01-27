import mongoose from "mongoose";


const UserDataSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    phoneNum:{
        type:Number,
        require:true
    },
    photo:{
        type:String,

    },
    access:{
        type:String,
        require:true
    }

})




const User = mongoose.models.userdata || mongoose.model('userdata', UserDataSchema)

export default User;