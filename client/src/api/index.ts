
import axios from "axios"

const ApiInstance = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1',
    headers:{
        'Content-type': 'application/json'
    }
})

export default ApiInstance