import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRoute } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { GetAllMessagesChat, getNameFriend } from '../redux/actions/ChatAction'




const ChatHook = () => {

    const dispatch = useDispatch()
    const route = useRoute();

    // get id conversation 
    const { id_conv } = route.params;
    // console.log(' id_conv :'+ id_conv)


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
    // console.log("id==="+ Id_User)



    useEffect(() => {
        if (id_conv) {
            dispatch(GetAllMessagesChat(id_conv))
            dispatch(getNameFriend(id_conv, Id_User))
        }

    }, [id_conv])

    useEffect(() => {
        if (id_conv && Id_User ) {
            dispatch(getNameFriend(id_conv, Id_User))
        }

    }, [id_conv, Id_User])


    // Get  Avis of Destination 
    const AllMessagesConv = useSelector(state => state.RedChat.All_Messages_conv)
    const Name_Friend = useSelector(state => state.RedChat.Name_Friend)

    // console.log('AllMessagesConv :', AllMessagesConv)
    console.log('Name_Friend :', Name_Friend)






    return [id_conv, Id_User, AllMessagesConv,Name_Friend]


}

export default ChatHook