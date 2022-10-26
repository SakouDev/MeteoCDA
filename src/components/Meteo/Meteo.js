import React, { useLayoutEffect } from 'react'
import {styleMeteo} from './StyleMeteo'
import { useEffect, useState } from 'react';
import { ApiService } from '../../api/axios';
import * as Location from 'expo-location';
import { Pressable, Image, Text, View } from 'react-native';
import Loader from '../Loader/Loader';

export default function Meteo() {

    const [location, setLocation] = useState({})
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            let location = await Location.getCurrentPositionAsync({});
            if (status !== 'granted') setErrorMsg('...');
            setLocation(location.coords)
        })();
    }, [loading])
   
    useEffect(() => {
        ApiService.get(location.latitude, location.longitude)
        .then(response => setData(response.data))
        .then(setLoading(false))
        .catch(error => console.log(error))
    }, [location])

    if(loading || data == null) return (
        <Loader />
    )
    console.log(data)

        const options = {weekday : 'short', month: 'short', day: 'numeric'}

    return (
        <View style={styleMeteo.container}>
            <Text>{data.city.name}</Text>
                <Pressable style={styleMeteo.button} onPress={() => {setLoading(true)}}>
                    <Text style={styleMeteo.text}>Update</Text>
                </Pressable>
            <Image 
                style = {styleMeteo.image}
                source={{
                    uri : `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`
                }}
            />
            <Text>{Math.floor(data.list[0].main.temp)}°</Text>
            <Text>{data.list[0].weather[0].main}</Text>
            <Text>{data.list[0].dt_txt}</Text>
            <View>
                <Text>{Math.round((data.list[0].wind.speed / 1000)/(1/3600))} Km/H</Text>
                <Text>Wind</Text>
            </View>
            <View>
                <Text>{data.list[0].main.humidity}%</Text>
                <Text>Humidity</Text>
            </View>
            <View>
                <Text>{Math.round((data.list[0].wind.speed / 1000)/(1/3600))} Km/H</Text>
                <Text>Wind</Text>
            </View>
            <Text>{data.list[0].rain ? data.list[0].rain["3h"] * 100 : 0}%</Text>
            <Text>Chance of rain</Text>
           
        </View>
    );
}

