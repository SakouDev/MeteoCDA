import { StyleSheet, Dimensions } from 'react-native';
const window = Dimensions.get('window').width

export const styleLoader = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
})