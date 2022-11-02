import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { styleMeteoNextDays } from "./styleMeteoNextDays";

import Loader from '../Loader/Loader';
import MeteoCardDays from "../MeteoCardDays/MeteoCardDays";
import MeteoSelected from "../MeteoSelected/MeteoSelected";


export default function MeteoNextDays({ data, setNextDays }) {
  let tab = [];
  // console.log("data",data)
  const [distinc, setDistinc] = useState([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let a = [];

    for (var i = 0; i < data.list.length; i++) {
      //  console.log(data.list[i].dt_txt.split(" ")[1]);
      if (tab.includes(data.list[i].dt_txt.split(" ")[0])) {
        // console.log("deja")
      } else {
        if (data.list[i].dt_txt.split(" ")[1] === "12:00:00") {
          tab.push(data.list[i].dt_txt.split(" ")[0]);
          a.push(data.list[i]);
        }
      }
    }
    setDistinc(a);
    setLoading(false)
  }, []);

  

  if(loading || data == null) return (
    <Loader />
  )
    
  // console.log("distinc",distinc)
  // console.log("current",current);
  return (
    <View style={styleMeteoNextDays.container}>
      
      <MeteoSelected setNextDays={setNextDays} data={distinc[current]} />
      
      <View style={styleMeteoNextDays.day}>
        {distinc.map((data, i) => (
          <View key={i}>
            <Pressable key={i} onPress={() => setCurrent(i)}>
              <MeteoCardDays
                key={i}
                data={data}
                css={current == i ? "current" : ""}
              />
            </Pressable>
          </View>
        ))}
      </View>
    </View>
  );
}