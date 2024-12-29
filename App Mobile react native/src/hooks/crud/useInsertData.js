
import ApiAuthBase from "../../Api/ApiBaseAuth"
import ApiChatBotBase from "../../Api/ApiChatBotBase"
import baseUrl from "../../Api/BaseUrl"







export const UseInsertData = async (url, params) => {
    const res = await baseUrl.post(url, params)
    return res
}


export const useInsertDataWithImg = async (url, params) => {
    const config = {
        headers: { "Content-Type": "multipart/form-data" }
    }
    const res = await baseUrl.post(url, params, config)
    return res.data
}




export const UseInsertDataAuth = async (url, params) => {
    const res = await ApiAuthBase.post(url, params)
    return res
}


export const useInsertDataAuthWithImg = async (url, params) => {
    const config = {
        headers: { "Content-Type": "multipart/form-data" }
    }
    const res = await ApiAuthBase.post(url, params, config)
    return res.data
}



export const UseInsertDataChatBot = async (url, params) => {
    const res = await ApiChatBotBase.post(url, params)
    return res
}


export const useInsertDataChatBotWithImg = async (url, params) => {
    const config = {
        headers: { "Content-Type": "multipart/form-data" }
    }
    const res = await ApiChatBotBase.post(url, params, config)
    return res.data
}

