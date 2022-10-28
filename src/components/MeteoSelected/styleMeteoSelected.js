import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window').width

export const styleMeteoSelected = StyleSheet.create({

    container: {
        display : "flex",
        position: 'relative',
        flexDirection: "row",
        top : 0,
        height : "40%",
        width: "100%",
        borderBottomLeftRadius : 50,
        borderBottomRightRadius : 50,
    },
    image : {
        height:"25%",
        width:"45%",
    },
    tempMax: {
        fontSize: 60,
        fontWeight : "bold",
        letterSpacing: 0.25,
        color: 'white',
    },
    tempMin: {
        fontSize: 45,
        fontWeight : "bold",
        letterSpacing: 0.25,
        color: 'grey',
    },
    titleDot: {
        display: "flex",
        flexDirection: 'row'
    },
    LEDOTDARKSASUKE : {
        color : "#9FA2A3",
        marginTop: 10,
        fontSize: 30
    },
    bottom: {
        position: 'absolute',
        bottom: 20,
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 25
    },
    bottomDiv:{
        width:"33%"
    },
    bottomText: {
        textAlign:'center',
        marginBottom: 3
    },

})