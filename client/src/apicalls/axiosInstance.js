import axios from "axios";
export const axiosInstance =axios.create({
    header  :{
        authorization :`Bearer ${localStorage.getItem('token')}`
    }
})