import React from "react";
import {
    Text,
    View,
    Image,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from "react-native"
import {usersinfo} from '../../constants/data'
import HomeScreen from "../HomeScreen";

const LogedUsers = ({item,navigation}) => {
    return(
        <TouchableOpacity style={styles.userInfo}
        onPress={()=>navigation.navigate(HomeScreen)}>
        <Image
            style={styles.userImage}
            source={item.image}
        />
        <Text style={styles.userName}>
            {item.name}
        </Text>
     </TouchableOpacity>
    )
}

const LoginScreen = ({navigation}) =>{
    return(
         <View style={styles.mainContainer}>
         <View>
            <Image
                style={styles.headingImage}
                source={require('../../Assets/Images/netflix.png')}
            />
         </View>
         <View style={styles.headingContainer}>
         <Text style={styles.heading}>
            Who's watching ? 
         </Text>
         </View>
         <FlatList
         contentContainerStyle={{alignItems:"center",justifyContent:"center"}}
            data={usersinfo}
            renderItem ={({item})=>{
             return<LogedUsers item={item} navigation={navigation}/>
            }}
            numColumns={2}
         />
         </View>
    )
}
 
const styles = StyleSheet.create({
mainContainer:{
    backgroundColor:"black",
    height:"100%",
    width:"100%"
},
headingImage:{
    height:80,
    width:"50%",
    marginLeft:100,
    marginTop:20
},
headingContainer:{
marginTop:50
},
heading:{
    color:'#F2EEF2',
    textAlign:"center",
    fontWeight:"bold"
},
userInfo:{
    height:130,
    width:100,
 marginHorizontal:40,
 marginVertical:30
},
userImage:{
    height:100,
    width:100,
    borderRadius:10
},
userName:{
    fontSize:14,
    fontWeight:"bold",
    color:"#F2EEF2",
    marginTop:10,
    alignSelf:"center"
}


})

export default LoginScreen;