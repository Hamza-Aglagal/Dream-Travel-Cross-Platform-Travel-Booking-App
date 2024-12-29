import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllDestination } from '../redux/actions/DestinationAction'
import { GetAllAttraction } from '../redux/actions/AttractionAction'
import { GetAllEvenement } from '../redux/actions/EvenementAction'
import { GetAllHebergement } from '../redux/actions/HebergementAction'



const SearchDestinationHook = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetAllDestination())
       
    }, [])

    // Get All Destination 
    const [dataDestination, setDataDestination] = useState([]);
    const data = useSelector(state => state.RedDestination.All_detinations)
    useEffect(() => {
        if (data) {
            setDataDestination(data);
        }
    }, [data]);

 




    return [dataDestination ]


}

export default SearchDestinationHook