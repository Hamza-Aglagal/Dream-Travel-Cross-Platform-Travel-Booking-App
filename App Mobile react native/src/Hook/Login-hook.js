import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetDestinationById } from '../redux/actions/DestinationAction'
import { useRoute } from '@react-navigation/native'
import { LoginUser } from '../redux/actions/AuthAction'
import { notifSuccess, notifyError } from '../hooks/notification/useNotif'
import AsyncStorage from '@react-native-async-storage/async-storage'



const LoginHook = () => {

    const dispatch = useDispatch()

    const [isLoading, setisLoading] = useState(false)

    const [ErrEmail, setErrEmail] = useState(null)
    const [ErrPassword, setErrPassword] = useState(null)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');




    const [isPress, setisPress] = useState(false)


    const handleSignIn = async () => {

        setisPress(true)
        setisLoading(true)

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrEmail('Please enter a valid email address.');
            setisLoading(false)
            return;
        } else {
            setErrEmail('')
        }

        if (password.length < 8) {
            setErrPassword('Password must be at least 8 characters long.');
            setisLoading(false)
            return;
        } else {
            setErrPassword('')
        }



        // console.log('Email:', email);
        // console.log('Password:', password);

        await dispatch(LoginUser({
            "email": email,
            "password": password
        }))

    };


    // get token after login
    const dataToken = useSelector(state => state.Auth.Login)


    useEffect(() => {
        if (dataToken && isPress) {

            if (dataToken.non_field_errors) {

                notifyError(dataToken.non_field_errors[0])
                setisPress(false)
                setisLoading(false)


            } else if (dataToken.access) {
                setisLoading(false)
                notifSuccess("Login successfully !")
                setisPress(false)

                AsyncStorage.setItem('token_Access', dataToken.access)
                AsyncStorage.setItem('user', JSON.stringify(dataToken.user))


            }

        }

    }, [dataToken])






    return [
        email, password, ErrPassword, ErrEmail,isLoading,
        setPassword, setEmail,
        handleSignIn,
    ]


}

export default LoginHook