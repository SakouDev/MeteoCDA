import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, View } from 'react-native';
import Meteo from './src/components/Meteo/Meteo';

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Meteo />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    image : {
        height:"25%",
        width:"50%"
    }
});
