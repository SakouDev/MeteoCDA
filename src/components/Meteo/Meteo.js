import {styleMeteo} from './StyleMeteo'
import { Pressable, Image, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import dayjs from 'dayjs'
require("dayjs/locale/fr")

export default function Meteo({data, setLoading,current}) {

    return (
        <LinearGradient style={styleMeteo.container} colors={['#10b2fc', '#1075f5']}>

            <Text style={styleMeteo.city}>{data.city.name}</Text>
            <Pressable style={styleMeteo.button} onPress={() => {setLoading(true)}}>
                <Text style={styleMeteo.text}>🟡 Update</Text>
            </Pressable>

            <Image 
                style = {styleMeteo.image}
                source={{
                    uri : `https://openweathermap.org/img/wn/${data.list[current].weather[0].icon}@4x.png`
                }}
            />
            <View>
            <View style={styleMeteo.titleDot}>
                <Text style={styleMeteo.temp}>{Math.round(data.list[current].main.temp)}</Text>
                <Text style={styleMeteo.LEDOTDARKSASUKE}>°</Text>
            </View>    
                <Text style={styleMeteo.title}>{data.list[current].weather[0].main}</Text>
                <Text style={styleMeteo.underTitle}>{dayjs(data.list[current].dt_txt).locale('fr').format('dddd D MMM')}</Text>
            </View>
            <View style={styleMeteo.bottom}>
                <View style={styleMeteo.bottomDiv}>
                    <Text style={styleMeteo.bottomText}>🍃</Text>
                    <Text style={styleMeteo.bottomText}>{Math.round((data.list[current].wind.speed / 1000)/(1/3600))} Km/H</Text>
                    <Text style={styleMeteo.bottomText}>Wind</Text>
                </View>
                <View>
                    <Text style={styleMeteo.bottomText}>💧</Text>
                    <Text style={styleMeteo.bottomText}>{data.list[current].main.humidity}%</Text>
                    <Text style={styleMeteo.bottomText}>Humidity</Text>
                </View>
                <View>
                    <Text style={styleMeteo.bottomText}>🌧️</Text>
                    <Text style={styleMeteo.bottomText}>{data.list[current].pop * 100}%</Text>
                    <Text style={styleMeteo.bottomText}>Chance of rain</Text>
                </View>
            </View>
        </LinearGradient>
    );
}

