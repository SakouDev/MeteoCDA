import { View, Text, Image } from "react-native";
import { styleMeteoCardDays } from "./styleMeteoCardDays";
import dayjs from 'dayjs'
require("dayjs/locale/fr")

export default function MeteoCard({data, css}) {
  return (
    <View style={css == "" ? styleMeteoCardDays.card : [styleMeteoCardDays.card,styleMeteoCardDays.current]}>
        <Text style={styleMeteoCardDays.text}>{dayjs(data.dt_txt).locale('fr').format('dddd')}</Text>
        <Image
          style={styleMeteoCardDays.tinyLogo}
          source={{
          uri: `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
          }} 
        />
        <Text style={styleMeteoCardDays.textTitle}>{data.weather[0].main}</Text>
        <View style={styleMeteoCardDays.group}>
          <Text style={styleMeteoCardDays.tempMax}>{Math.round(data.main.temp_max)}/</Text>
          <Text style={styleMeteoCardDays.tempMin}>{Math.round(data.main.temp_min)}</Text>
          <Text style={styleMeteoCardDays.LEDOTDARKSASUKE}>°</Text>
        </View>
    </View>
  )
}