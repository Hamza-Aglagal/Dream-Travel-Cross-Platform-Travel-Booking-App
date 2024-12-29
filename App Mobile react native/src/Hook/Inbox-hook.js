import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRoute } from '@react-navigation/native'
import { GetAvisOfDestination } from '../redux/actions/AvisAction'
import { GetAllConversationUser } from '../redux/actions/ConversationAction'
import AsyncStorage from '@react-native-async-storage/async-storage'




const InboxHook = () => {

    const dispatch = useDispatch()



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
        dispatch(GetAllConversationUser(Id_User))

    }, [Id_User])



    // Get  Avis of Destination 
    const [ConversationsUser, setConversationUser] = useState([]);
    const data = useSelector(state => state.RedConversation.Conver_Of_User)
    useEffect(() => {
        if (data) {
            setConversationUser(data);
        }
    }, [data]);
    // console.log('ConversationsUser :', ConversationsUser)






    return [ConversationsUser]


}

export default InboxHook