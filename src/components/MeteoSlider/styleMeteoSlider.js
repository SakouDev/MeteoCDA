import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window').width

export const styleMeteoSlider = StyleSheet.create({
    container : {
        height: "24%",
        width: "100%",
        padding: 10
    },
    scrollview: {
        justifyContent:'center'
    },
    text: {
        fontSize: 25,
        lineHeight: 25,
        letterSpacing: 0.25,
        color: 'white',
        marginVertical: 15
    },
    textRight: {
        fontSize: 18,
        lineHeight: 25,
        color: '#9FA2A3',
        marginVertical: 15
    },
    SliderTop: {
        display: 'flex',
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',

    }
})