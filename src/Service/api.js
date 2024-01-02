import axios from "axios";

const apl_url='http://localhost:3002/users';
export const addUser= async (data)=>{
    try{
       await axios.post(apl_url, data)
    }
    catch(error){
        console.log('occur error',error.message)
    }
}
export const getUsers= async ()=>{
    try{
       return await axios.get(apl_url)
    }
    catch(error){
        console.log('occur error',error.message)
    }
}
export const getUser= async (data)=>{
    try{
       return await axios.get(`${apl_url}/${data}`)
    }
    catch(error){
        console.log('occur error',error.message)
    }
}
export const editUser= async (data,id)=>{
    try{
       return await axios.put(`${apl_url}/${id}`, data)
    }
    catch(error){
        console.log('occur error',error.message)
    }
}
export const deleteUser= async (id)=>{
    try{
       return await axios.delete(`${apl_url}/${id}`)
    }
    catch(error){
        console.log('occur error',error.message)
    }
}