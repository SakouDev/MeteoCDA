import { Dimensions, StyleSheet } from "react-native";
const window = Dimensions.get('window').width;
const height = Dimensions.get('window').height

export const styleMeteoNextDays = StyleSheet.create({
   container: {
      backgroundColor: "#303030"
   },
   tinyLogo: {
      width: "50%",
      height: "50%"
   },
   description : {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: window,
      paddingHorizontal: 20
   },
   text : {
      color: "gray",
      alignSelf: "center"
   },
   textB : {
      color: "white",
      alignSelf: "center"
   }, 
   current : {
      justifyContent: "space-between",
      width: window,
      paddingHorizontal: 20,
      backgroundColor: "blue"
   },
   day : {
      height: "70%",
      width : "100%",
   }
});