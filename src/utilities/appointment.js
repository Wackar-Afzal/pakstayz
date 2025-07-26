import axios from './AxiosInterceptops'
  
export  async function addAppointment (data){
    console.log(data,"datat in api call")
    try{
        const API_URL = `/api/appointment/add`
        const response = await axios.post(API_URL,data)
        console.log(response.data,"response")
        return {message:response.data.message, success:true, data:response.data.data}
    
    }catch(error){
        const message = error.response?.data?.message || error?.message || error.toString()
        console.log(error,"error")
        return {message:message, success:false }
    }
    }


    export  async function appointmentHistory (){
        try{
            const API_URL = `/api/appointment/get-user`
            const response = await axios.get(API_URL)
            console.log(response.data,"response")
            return {message:response.data.message, success:true, data:response.data.data}
        
        }catch(error){
            const message = error.response?.data?.message || error?.message || error.toString()
            console.log(error,"error")
            return {message:message, success:false }
        }
        }
    



        // user profile

        export  async function updateUser (data){
            console.log(data,"datat in api call")
            try{
                const API_URL = `/api/auth/user`
                const response = await axios.post(API_URL,data)
                console.log(response.data,"response")
                return {message:response.data.message, success:true, data:response.data.data}
            
            }catch(error){
                const message = error.response?.data?.message || error?.message || error.toString()
                console.log(error,"error")
                return {message:message, success:false }
            }
            }