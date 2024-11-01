import axios from "axios"


export const req=axios.create({
    baseURL:'https://api.github.com',
    headers:{
        'Content-Type':'application/json'
    },
    timeout:3600,
 
})