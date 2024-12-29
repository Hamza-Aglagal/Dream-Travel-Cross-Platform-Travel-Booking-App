import ApiChatBotBase from "../../Api/ApiChatBotBase"
import baseUrl from "../../Api/BaseUrl"


export const UseGetdata = async(url, params) => {
    const res = await baseUrl.get(url, params)
    return res
}


export const useGetdataChatBot = async(url, params) => {
    const res = await ApiChatBotBase.get(url, params)
    return res
}




