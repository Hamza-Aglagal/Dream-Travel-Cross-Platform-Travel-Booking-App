import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetDestinationById } from '../redux/actions/DestinationAction'
import { useRoute } from '@react-navigation/native'
import { LoginUser, RegisterUser } from '../redux/actions/AuthAction'
import { notifSuccess, notifyError } from '../hooks/notification/useNotif'



const SignUpHook = () => {

    const dispatch = useDispatch()


    const [isLoading, setisLoading] = useState(false)

    const [errFirstName, setErrFirstName] = useState('');
    const [errLastName, setErrLastName] = useState('');
    const [ErrEmail, setErrEmail] = useState(null)
    const [ErrPassword, setErrPassword] = useState(null)
    const [errConfirmPassword, setErrConfirmPassword] = useState('');


    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Confirmpassword, setConfirmPassword] = useState('');




    const [isPress, setisPress] = useState(false)


    const handleSignUp = async () => {

        setisPress(true)
        setisLoading(true)


        if (firstName.trim() === '') {
            setErrFirstName('First name is required.');
            setisLoading(false)
            return;
        } else {
            setErrFirstName('');
        }

        if (lastName.trim() === '') {
            setErrLastName('Last name is required.');
            setisLoading(false)
            return;
        } else {
            setErrLastName('');
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrEmail('Please enter a valid email address.');
            setisLoading(false)
            return;
        } else {
            setErrEmail('');
        }

        if (password.length < 8) {
            setErrPassword('Password must be at least 8 characters long.');
            setisLoading(false)
            return;
        } else {
            setErrPassword('');
        }

        if (Confirmpassword !== password) {
            setErrConfirmPassword('Passwords do not match.');
            setisLoading(false)
            return;
        } else {
            setErrConfirmPassword('');
        }



        // console.log("firstname : " + firstName)
        // console.log("lastName : " + lastName)
        // console.log("email : " + email)
        // console.log("password : " + password)
        // console.log("Confirmpassword : " + Confirmpassword)



        await dispatch(RegisterUser({
            "prenom": firstName,
            "nom": lastName,
            "email": email,
            "password": password
        }))

    };


    // get message register
    const MessageRegester = useSelector(state => state.Auth.Register)
    // console.log('msg = ' + MessageRegester && MessageRegester.error && MessageRegester.error)


    useEffect(() => {
        if (MessageRegester && isPress) {

            if (MessageRegester.error) {
                setisLoading(false)
                notifyError(MessageRegester.error)
                setisPress(false)


            } else if (MessageRegester.reponse) {
                setisLoading(false)
                notifSuccess(MessageRegester.reponse)
                setisPress(false)

            }

        }

    }, [MessageRegester])


    return [
        email, password, ErrPassword, ErrEmail, lastName, firstName, Confirmpassword, errFirstName, errLastName, errConfirmPassword,isLoading,
        setPassword, setEmail, setlastName, setfirstName, setConfirmPassword,
        handleSignUp,
    ]


}

export default SignUpHook