import React from 'react'
import { View , Image, ImageBackground } from 'react-native'
import {styleLoader} from './StyleLoader'

export default function Loader() {
  return (
      <ImageBackground 
        style={styleLoader.container}
        source={require('../../assets/img/circle2.gif')} >
        <Image
            style = {styleLoader.image}
            source={require('../../assets/img/loading-final.gif')} 
        />
      </ImageBackground>
  )
}
