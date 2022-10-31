import {styleMeteoSelected} from './styleMeteoSelected'
import { Pressable, Image, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import dayjs from 'dayjs'


export default function MeteoSelected({data ,setNextDays,current}) {
    // console.log("Aled",data)


    return (
        <LinearGradient style={styleMeteoSelected.container} colors={['#10b2fc', '#1075f5']}>
            <Pressable onPress={() => {setNextDays(false)}}>
                <Text style={styleMeteoSelected.arrowBack}>⬅</Text>
            </Pressable>
           <Image 
                style = {styleMeteoSelected.image}
                source={{
                    uri : `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
                }}
            />
             <View style={styleMeteoSelected.tempgroup}>
                <View style={styleMeteoSelected.titleDot}>
                    <Text style={styleMeteoSelected.tempMax}>{Math.round(data.main.temp_max)}/</Text>
                    <Text style={styleMeteoSelected.tempMin}>{Math.round(data.main.temp_min)}</Text>
                    <Text style={styleMeteoSelected.LEDOTDARKSASUKE}>°</Text>
                </View>
                <Text style={styleMeteoSelected.title}>{data.weather[0].main}</Text>
                <Text style={styleMeteoSelected.underTitle}>{dayjs(data.dt_txt).locale('fr').format('dddd D MMM')}</Text>
            </View>

            <View style={styleMeteoSelected.bottom}>

                 <View style={styleMeteoSelected.bottomDiv}>
                    <Text style={styleMeteoSelected.bottomText}>🍃</Text>
                    <Text style={styleMeteoSelected.bottomText}>{Math.round((data.wind.speed / 1000)/(1/3600))} Km/H</Text>
                    <Text style={styleMeteoSelected.bottomText}>Wind</Text>
                </View>
                <View>
                    <Text style={styleMeteoSelected.bottomText}>💧</Text>
                    <Text style={styleMeteoSelected.bottomText}>{data.main.humidity}%</Text>
                    <Text style={styleMeteoSelected.bottomText}>Humidity</Text>
                </View>
                <View>
                    <Text style={styleMeteoSelected.bottomText}>🌧️</Text>
                    <Text style={styleMeteoSelected.bottomText}>{data.pop * 100}%</Text>
                    <Text style={styleMeteoSelected.bottomText}>Chance of rain</Text>
                </View>
            </View>
        </LinearGradient>
    );
}

