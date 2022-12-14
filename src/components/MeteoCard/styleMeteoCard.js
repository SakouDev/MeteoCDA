import { Dimensions, StyleSheet } from "react-native";

export const styleMeteoCard = StyleSheet.create({
    tinyLogo: {
        width: "50%",
        height: "50%"
    },
    card: {
        margin:10,
        alignSelf:'center',
        marginHorizontal:6,
        height: 100,
        width: 80,
        textAlign: "center",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 30,
        alignItems: "center",
    },
    text : {
        color: "white",
        fontWeight: "bold"
    }, 
    current : {
        backgroundColor: "#1075f5",
        borderRadius: 30,
        elevation : 20
    },
});