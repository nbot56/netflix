import React from "react";
import {
Text,
View,
Image,
StyleSheet
}
from "react-native"

const StartupScreen = () =>{
    return(
    <View style={styles.mainContainer}> 
   <Image 
   style={ styles.netflixlogo}
    source={require('../../Assets/Images/netflix.png')}
   />
    </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        height:"100%",
        width:"100%",
        backgroundColor:"black",
        justifyContent:"center"
    },
    netflixlogo:{
        height:80,
        width:"100%"
    }
})

export default StartupScreen;