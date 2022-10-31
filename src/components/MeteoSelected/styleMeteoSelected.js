import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window').width

export const styleMeteoSelected = StyleSheet.create({

    container: {
        display : "flex",
        position: 'relative',
        flexDirection: "row",
        top : 0,
        height : "35%",
        width: "100%",
        borderBottomLeftRadius : 50,
        borderBottomRightRadius : 50,
    },
    image : {
        height:"45%",
        width:"50%",
        position:'relative',
        top: '10%',
        marginTop: "5%"
    },
    tempgroup: {
        position:'relative',
        top: '5%',
        right: '3%',
        marginTop: "3%"
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
        color: '#B5BDC8',
        marginTop : 18
    }, 
    LEDOTDARKSASUKE : {
        color : "white",
        marginTop: 10,
        fontSize: 40
    },
    titleDot: {
        display: "flex",
        flexDirection: 'row'
    },
    title: {
        fontSize: 35,
        letterSpacing: 0.15,
        color: 'white',
        textAlign: 'center'
    },
    underTitle: {
        fontSize: 20,
        letterSpacing: 0.15,
        color: '#9FA2A3',
        width: '100%',
        textAlign: "center"
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
    arrowBack : {
        fontSize: 60,
        position: 'absolute',
        top: -30,
        color: "white"
    }

})