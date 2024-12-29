import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllDestination, GetPopularDestinations } from '../redux/actions/DestinationAction'
import { GetAllAttraction } from '../redux/actions/AttractionAction'
import { GetAllEvenement } from '../redux/actions/EvenementAction'
import { GetAllHebergement } from '../redux/actions/HebergementAction'
import AsyncStorage from '@react-native-async-storage/async-storage'



const WishListHook = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetPopularDestinations())
    }, [])

    // Get All Destination 
    const [dataDestination, setDataDestination] = useState([]);
    const data = useSelector(state => state.RedDestination.Popular_detinations)
    useEffect(() => {
        if (data) {
            setDataDestination(data);
        }
    }, [data]);


    const [likedDestinations, setLikedDestinations] = useState([]);

    useEffect(() => {
        const fetchLikedDestinations = async () => {
            const likedDestinationsString = await AsyncStorage.getItem('likes');
            // console.log('likes id : '+ likedDestinationsString)
            if (likedDestinationsString) {
                try {

                    if (likedDestinationsString) {
                        const likedDestinationsArray = JSON.parse(likedDestinationsString);

                        const filteredDestinations = dataDestination.filter(destination => likedDestinationsArray.includes(destination.id));
                        setLikedDestinations(filteredDestinations);
                    }
                } catch (error) {
                    console.error('Error fetching liked destinations:', error);
                }
            }

        };

        fetchLikedDestinations();
    }, [dataDestination]);


    // console.log('data : ', likedDestinations)



    return [likedDestinations]


}

export default WishListHook