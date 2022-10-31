import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window').width

export const styleMeteo = StyleSheet.create({

    container: {
        display : "flex",
        position: 'relative',
        top : 0,
        paddingTop: 40,
        paddingHorizontal: 10,
        height : "75%",
        width: "100%",
        borderBottomLeftRadius : 50,
        borderBottomRightRadius : 50,
        alignItems: "center"
    },
    city: {
        fontSize: 30,
        color: 'white'
    },
    button: {
        width: "25%",
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 1,
        paddingHorizontal: 5,
        marginVertical: 10,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "white"
    },
    text: {
        fontSize: 12,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'white',
    },
    image : {
        height:"27%",
        width:"75%",
    },
    temp: {
        fontSize: 100,
        fontWeight : "bold",
        letterSpacing: 0.25,
        color: 'white',
        
        alignSelf: 'center'
    },
    title: {
        fontSize: 40,
        letterSpacing: 0.15,
        color: 'white',
        textAlign: 'center'
    },
    underTitle: {
        fontSize: 20,
        letterSpacing: 0.15,
        color: '#9FA2A3',
        width: '100%',
        alignSelf: 'center'
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
    titleDot: {
        display: "flex",
        flexDirection: 'row'
    },
    LEDOTDARKSASUKE : {
        color : "#9FA2A3",
        position: 'relative',
        top: 20,
        left: 5,
        fontSize: 50
    }
});