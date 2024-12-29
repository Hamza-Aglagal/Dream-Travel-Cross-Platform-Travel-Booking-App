import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
 import { useRoute } from '@react-navigation/native'
import { GetAvisOfDestination } from '../redux/actions/AvisAction'
 



const ReviewHook = () => {

    const dispatch = useDispatch()

    const route = useRoute();
    const { id } = route.params;
    // console.log('Id re :', id)




    useEffect(() => {
        dispatch(GetAvisOfDestination(id))
       
    }, [id])

    // Get  Avis of Destination 
    const [AvisDestination, setDataAvis] = useState([]);
    const data = useSelector(state => state.RedAvis.Avis_Of_Destination)
    useEffect(() => {
        if (data) {
            setDataAvis(data);
        }
    }, [data]);
    // console.log('AvisDestination :', AvisDestination)

 




    return [AvisDestination, id ]


}

export default ReviewHook