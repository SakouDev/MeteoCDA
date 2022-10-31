import { StyleSheet, Dimensions } from 'react-native';
const window = Dimensions.get('window').width

export const styleLoader = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height : "100%",
    },
    background : {
        resizeMode : 'contain'
    },
    image : {
        width : '85%',
        height : '10%'
    }
})