import { Dimensions, StyleSheet } from "react-native";

export const styleMeteoCardDays = StyleSheet.create({
    tinyLogo: {
        width: "25%",
        height: "50%"
    },
    card: {
        display:"flex",
        flexDirection: "row",
        paddingHorizontal: '10%',
        marginTop:5,
        height: 100,
        width: '100%',
        alignItems: "center",
        justifyContent: "space-between",
    },
    current : {
        backgroundColor: "#1075f5",
        borderRadius: 10,
        elevation : 20
    },
    text : {
        color: "white",
        fontWeight: "bold",
        width: "18%"
    }, 
    textTitle : {
        position: 'relative',
        left : -15,
        color: "lightgrey",
        fontWeight: "bold"
    },
    tempMax: {
        fontSize: 35,
        fontWeight : "bold",
        letterSpacing: 1,
        color: 'white',
    },
    tempMin: {
        fontSize: 20,
        fontWeight : "bold",
        letterSpacing: 0.25,
        color: '#B5BDC8',
        marginTop : 15
    }, 
    LEDOTDARKSASUKE : {
        color : "white",
        marginTop: 5,
        fontSize: 30
    },
    group: {
        display: "flex",
        flexDirection: 'row'
    },
});