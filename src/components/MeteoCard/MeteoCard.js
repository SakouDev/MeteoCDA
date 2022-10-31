import { View, Text, Image } from "react-native";
import { styleMeteoCard } from "./styleMeteoCard";

export default function MeteoCard({data, css}) {
  return (
    <View style={css == "" ? styleMeteoCard.card : [styleMeteoCard.card,styleMeteoCard.current]}>
        <Text style={styleMeteoCard.text}>{Math.round(data.main.temp)}°</Text>
            <Image
                style={styleMeteoCard.tinyLogo}
                source={{
                uri: `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
                }} 
            />
        <Text style={styleMeteoCard.text}>{data.dt_txt.split(" ")[1].slice(0, -3)}</Text>
    </View>
  )
}