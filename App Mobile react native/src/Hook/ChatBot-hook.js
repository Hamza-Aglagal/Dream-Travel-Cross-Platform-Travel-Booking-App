import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRoute } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { GetAllMessagesChatBot, SendMessage } from '../redux/actions/ChatBotAction'




const ChatBotHook = () => {

    const dispatch = useDispatch()

    const [Message, setMessage] = useState(null)


    const [Reload, setReload] = useState(false)



    // get id user 
    const [Id_User, setIDUser] = useState(null);
    useEffect(() => {
        AsyncStorage.getItem('user')
            .then(user => {
                const userData = JSON.parse(user);
                setIDUser(userData.id);
            })
            .catch(error => {
                setIDUser(null);
            });
    }, []);
    // console.log("id===" + Id_User)



    // get all messages of conversation chaBot
    useEffect(() => {
        if (Id_User) {
            dispatch(GetAllMessagesChatBot(Id_User))
        }

    }, [Id_User, Reload])


    const DataMessages = useSelector(state => state.RedChatBot.All_Messages_conv)
    // console.log('DataMessages :', DataMessages)


    const [isLoading, setisLoading] = useState(false)




    const MessageResponse = useSelector(state => state.RedChatBot.Message_ChatBot)
    // console.log('MessageResponse :', MessageResponse)

    useEffect(() => {
        if (MessageResponse) {
            if (MessageResponse.message) {
                setReload(prev => !prev)
                // console.log('Response : ' + MessageResponse.message)
                setisLoading(false)
            }
        }
    }, [MessageResponse])


    // for scrolling 
    const scrollViewRef = useRef(null);
    useEffect(() => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollToEnd({ animated: true });
        }
    }, [DataMessages]);



    const handleSubmit = async () => {

        if (scrollViewRef.current) {
            scrollViewRef.current.scrollToEnd({ animated: true });
        }

        setisLoading(true)
        setMessage(null)


        await dispatch(SendMessage({
            "user_id": Id_User,
            "message": Message
        }))


    }



    return [
        Message, DataMessages, isLoading, scrollViewRef,
        setMessage, handleSubmit
    ]


}

export default ChatBotHook