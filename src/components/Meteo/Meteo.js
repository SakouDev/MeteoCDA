import React, { useLayoutEffect } from 'react'
import {styleMeteo} from './StyleMeteo'
import { useEffect, useState } from 'react';
import { ApiService } from '../../api/axios';
import * as Location from 'expo-location';
import { Pressable, Image, Text, View } from 'react-native';
import Loader from '../Loader/Loader';
import { LinearGradient } from 'expo-linear-gradient';

export default function Meteo() {

    const [location, setLocation] = useState({})
    const [data, setData] = useState()
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
        console.log(data)
    }, [location])

    if(loading || data == null) return (
        <Loader />
    )


    const options = {weekday : 'short', month: 'long', day: 'numeric'}
    console.log(data.list[0].dt_txt)
    let formatDate = new Date(data.list[0].dt_txt);
    data.list[0].dt_txt = formatDate.toLocaleDateString("fr-FR")
    console.log(data.list[0].dt_txt)
  

    return (
        <LinearGradient style={styleMeteo.container} colors={['#10b2fc', '#1075f5']} start={{ y: 1 }} end={{ y: 0 }}>

            <Text style={styleMeteo.city}>{data.city.name}</Text>
            <Pressable style={styleMeteo.button} onPress={() => {setLoading(true)}}>
                <Text style={styleMeteo.text}>Update</Text>
            </Pressable>

            <Image 
                style = {styleMeteo.image}
                source={{
                    uri : `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@4x.png`
                }}
            />
            <View>
            <View style={styleMeteo.titleDot}>
                <Text style={styleMeteo.temp}>{Math.round(data.list[0].main.temp)}</Text>
                <Text style={styleMeteo.LEDOTDARKSASUKE}>°</Text>
            </View>    
                <Text style={styleMeteo.title}>{data.list[0].weather[0].main}</Text>
                <Text style={styleMeteo.underTitle}>{data.list[0].dt_txt}</Text>
            </View>
            <View style={styleMeteo.bottom}>
                <View>
                    <Text style={styleMeteo.bottomText}>{Math.round((data.list[0].wind.speed / 1000)/(1/3600))} Km/H</Text>
                    <Text style={styleMeteo.bottomText}>Wind</Text>
                </View>
                <View>
                    <Text style={styleMeteo.bottomText}>{data.list[0].main.humidity}%</Text>
                    <Text style={styleMeteo.bottomText}>Humidity</Text>
                </View>
                <View>
                    <Text style={styleMeteo.bottomText}>{data.list[0].rain ? data.list[0].rain["3h"] * 100 : 0}%</Text>
                    <Text style={styleMeteo.bottomText}>Chance of rain</Text>
                </View>
            </View>
        </LinearGradient>
    );
}

