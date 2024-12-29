import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  GetDestinationById } from '../redux/actions/DestinationAction'
import { useRoute } from '@react-navigation/native'
 



const DetailDestinationHook = () => {

    const dispatch = useDispatch()

    const route = useRoute();
    const { id } = route.params;
    // console.log('Id :', id)




    useEffect(() => {
        dispatch(GetDestinationById(id))
       
    }, [id])

    // Get  Destination by id 
    const [DestinationById, setDataDestination] = useState([]);
    const data = useSelector(state => state.RedDestination.Destination_ById)
    useEffect(() => {
        if (data) {
            setDataDestination(data);
        }
    }, [data]);
    // console.log('DestinationById :', DestinationById)

 
    const initialRegion = {
        latitude: 34.020082,
        longitude: -6.841650,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    const [mapType, setMapType] = useState("standard");



    // add comment 
    const [Comment, setComment] = useState(null)


    return [
        DestinationById, id, mapType , initialRegion,
        setComment , Comment ,  
    
    ]


}

export default DetailDestinationHook