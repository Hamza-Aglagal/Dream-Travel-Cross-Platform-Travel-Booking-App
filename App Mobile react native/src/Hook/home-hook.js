import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllDestination, GetPopularDestinations } from '../redux/actions/DestinationAction'
import { GetAllAttraction } from '../redux/actions/AttractionAction'
import { GetAllEvenement } from '../redux/actions/EvenementAction'
import { GetAllHebergement } from '../redux/actions/HebergementAction'



const HomeHook = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetPopularDestinations())
        dispatch(GetAllAttraction())
        dispatch(GetAllEvenement())
        dispatch(GetAllHebergement())
    }, [])

    // Get All Destination 
    const [dataDestination, setDataDestination] = useState([]);
    const data = useSelector(state => state.RedDestination.Popular_detinations)
    useEffect(() => {
        if (data) {
            setDataDestination(data);
        }
    }, [data]);


    // Get All Attraction 
    const dataAttraction = useSelector(state => state.RedAttraction.DataAattraction)
    // console.log('res==== des:', dataAttraction)


    // Get All Evenement 
    const dataEvenement = useSelector(state => state.RedEvenement.All_evenement)
    //  console.log('res==== :', dataEvenement)


    // Get All  Hebergement 
    const dataHebergement = useSelector(state => state.RedHeberegement.All_Hebergement)
    //  console.log('res==== :', dataHebergement)




    return [dataDestination, dataAttraction, dataEvenement,dataHebergement]


}

export default HomeHook