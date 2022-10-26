import React from 'react'
import { View, Image } from 'react-native'

import {styleLoader} from './StyleLoader'

export default function Loader() {
  return (
    <View style={styleLoader.container}>
        <Image
            style = {styleLoader.image}
            source={require('../../assets/img/loading.gif')} 
        />
    </View>
  )
}
