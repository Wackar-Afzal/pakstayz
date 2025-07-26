import axios from "axios";
export  async function signUpFunction (data){
    if(data.name==="" || data.phone==="" || data.gender==="" || data.birthData==="" || data.anniversaryDate===""){
     return ({success:false,message:"please fill all fields"})
     }
else{
        try{
            const API_URL = `/api/auth/signup`
            const response = await axios.post(API_URL, data)
            console.log(response.data)
            return {message:response.data.message, success:true, data:response.data.data}
        }catch(error){
            const message = (error.response && error.response.data && error.response.data.message) || error.response.data.status || error.message || error.toString()
            console.log(message)
            return {message:message, success:false }
        }
    }
    

}

export  async function signInFunction (data){
    if(data.phone===""){
        return ({success:false,message:"please provide phone number to proceed"})
    }else{
        try{
            const API_URL = `/api/auth/signin`
            const response = await axios.post(API_URL, data)
            console.log(response.data)
            return {message:response.data.message, success:true, data:response.data.data}
        }catch(error){
            console.log(error,"error")
            const message = (error.response && error.response.data && error.response.data.message) || error.response.data.status || error.message || error.toString()
            console.log(message)
            return {message:message, success:false }
        }
    }
    

}



export  async function signInAdminFunction (data){
    if(data.phone==="" || data.password==""){
        return ({success:false,message:"please provide correct phone number and password to proceed"})
    }else{
        try{
            const API_URL = `/api/auth/admin-signin`
            const response = await axios.post(API_URL, data)
            console.log(response.data)
            return {message:response.data.message, success:true, data:response.data.data}
        }catch(error){
            console.log(error,"error")
            const message = (error.response && error.response.data && error.response.data.message) || error.response.data.status || error.message || error.toString()
            console.log(message)
            return {message:message, success:false }
        }
    }
    

}