import axios from "axios";


const ApiChatBotBase = axios.create({baseURL:"http://10.0.2.2:8000/chatbot/"})




export default ApiChatBotBase 