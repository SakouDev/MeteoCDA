import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, View } from 'react-native';
import Meteo from './src/components/Meteo/Meteo';
import MeteoSlider from './src/components/MeteoSlider/MeteoSlider';
import { useEffect, useState } from 'react';
import { ApiService } from './src/api/axios';
import * as Location from 'expo-location';
import Loader from './src/components/Loader/Loader';
import MeteoNextDays from './src/components/MeteoNextDays/MeteoNextDays';


export default function App() {

    const [location, setLocation] = useState({})
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [current, setCurrent] = useState(0)
    const [nextDays, setNextDays] = useState(false)

    console.log(current)


    useEffect(() => {
        (async () => {
            setData(null)
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
        // console.log(data)
    }, [location])

    if(loading || data == null) return (
        <Loader />
    )
    
    if(nextDays || data == null) return (
        <MeteoNextDays data={data}/>
    )

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Meteo data = {data} setLoading={setLoading} current={current} />
            <MeteoSlider data = {data} setCurrent={setCurrent} current={current} setNextDays={setNextDays} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#303030',
        alignItems: 'center',
    },
    image : {
        height:"25%",
        width:"50%"
    }
});
