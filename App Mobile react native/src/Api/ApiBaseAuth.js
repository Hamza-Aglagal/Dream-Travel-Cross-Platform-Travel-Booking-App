import axios from "axios";


const ApiAuthBase = axios.create({baseURL:"http://10.0.2.2:8000/auth/"})




export default ApiAuthBase 