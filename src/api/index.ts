
import axios from "axios"

const ApiInstance = axios.create({
    baseURL: 'https://transitiontask4-api.vercel.app',
    headers:{
        'Content-type': 'application/json'
    }
})

export default ApiInstance