import { Pressable, ScrollView, Text, View } from 'react-native'
import MeteoCard from '../MeteoCard/MeteoCard'
import { styleMeteoCard } from '../MeteoCard/styleMeteoCard'
import {styleMeteoSlider} from './styleMeteoSlider'

export default function MeteoSlider({data, setCurrent, current, setNextDays}) {
  return (
    <View style={styleMeteoSlider.container}>
        <View  style={styleMeteoSlider.scrollview}>

            <View style={styleMeteoSlider.SliderTop}>
                <Text style={styleMeteoSlider.text}>Aujourd'hui</Text>
                <Pressable onPress={() => (setNextDays(true))}>
                    <Text style={styleMeteoSlider.textRight}>5 Days→ </Text>
                </Pressable>
            </View>

            <ScrollView horizontal={true}>
                {data.list.slice(0,8).map((data, i)=>{
                    return(
                        <Pressable key={i} onPress={() => {setCurrent(i)}}>
                            <MeteoCard
                                key = {i}
                                data = {data}
                                css = {i == current ? styleMeteoCard.current : ''}
                            />
                        </Pressable>
                    )
                })}
            </ScrollView>
        </View>
    </View>
  )
}
