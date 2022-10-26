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
        backgroundColor : "lightblue",
        borderBottomLeftRadius : 50,
        borderBottomRightRadius : 50
    },
    button: {
        width: "50%",
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    image : {
        height:"25%",
        width:"50%"
    }
});