import React, { useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    ImageBackground,
    FlatList
} from "react-native"
import { movieCard, hollywoodMovieCard } from "../../constants/data";
import IonIcons from "react-native-vector-icons/Ionicons";


const MovieCards = ({ item }) => {
    return (
        <TouchableOpacity style={styles.movieCard}>
            <View style={styles.movieCardImage}>
                <Image
                    style={styles.movieCardImageStyling}
                    source={item.movieCardPoster}
                />
            </View>
            <Text style={{ fontSize: 10, color: "white", marginTop: 5 }}>
                {item.movieTitle}
            </Text>
        </TouchableOpacity>
    )
}

const HollywoodMovieCard = ({ item }) => {
    return (
        <TouchableOpacity style={styles.movieCard}>
            <View style={styles.movieCardImage}>
                <Image
                    style={styles.movieCardImageStyling}
                    source={item.HollywoodMovieCardPoster}
                />
            </View>
            <Text style={{ fontSize: 10, color: "white", marginTop: 5 }}>
                {item.HollywoodMovieTitle}
            </Text>
        </TouchableOpacity>
    )
}



const HomeScreen = () => {
    const [click, setClick] = useState(true)
    return (
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <Text style={{ color: "white", fontSize: 20 }}>
                    X
                </Text>
                <Image
                    style={styles.headerImage}
                    source={require('../../Assets/Images/netflix.png')}
                />
                <TouchableOpacity>
                    <Image
                        style={styles.userProfile}
                        source={require('../../Assets/Images/sanju.jpg')}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.moviePosterContainer}>
                <ImageBackground
                    style={styles.moviePoster}
                    source={require('../../Assets/Images/df.jpg')}
                >
                    <View style={{ marginTop: 60 }}>
                        <Text style={{ color: "white", fontSize: 20, marginLeft: 20 }}>THE FORGOTTEN</Text>
                        <Text style={{ color: "white", fontSize: 20, marginLeft: 60 }}>BATTLE</Text>
                    </View>
                    <View style={styles.moviePosterButton}>
                        
                            <TouchableOpacity
                                onPress={() => { setClick(!click) }}
                            >
                                {
                                    click == true ?
                                        <View style={{ flexDirection: "row" ,height:"100%",width:"100%",alignItems:"center"}}>
                                            <IonIcons
                                                name="play-circle-outline"
                                                size={30}
                                                color="white"
                                            />
                                            <Text style={{ color: "white", fontWeight: "bold", marginLeft: 7 }}>
                                                Play
                                            </Text>
                                        </View>

                                        :

                                        <View style={{ flexDirection: "row" ,height:"100%",width:"100%",alignItems:"center"}}>

                                            <IonIcons
                                                name="pause-circle-outline"
                                                size={30}
                                                color="white"
                                                style={{paddingRight:10}}
                                            />
                                            <Text style={{ color: "white", fontWeight: "bold" }}>
                                                Pause
                                            </Text>
                                        </View>

                                }
                            </TouchableOpacity>
                       
                    </View>
                </ImageBackground>
            </View>
            <View
                style={
                    styles.movieFeedsHeader
                }>
                <Text style={{ color: "white", fontWeight: "bold" }}>Recently Watched</Text>
                <Text style={{ color: "red", fontSize: 11 }}>View all</Text>
            </View>
            <View style={{ height: 170 }}>
                <FlatList
                    data={movieCard}
                    renderItem={MovieCards}
                    horizontal
                />
            </View>
            <View
                style={
                    styles.movieFeedsHeader
                }>
                <Text style={{ color: "white", fontWeight: "bold" }}>Hollywood Movies</Text>
                <Text style={{ color: "red", fontSize: 11 }}>View all</Text>
            </View>
            <View style={{ height: 170 }}>
                <FlatList
                    contentContainerStyle={{}}
                    data={hollywoodMovieCard}
                    renderItem={HollywoodMovieCard}
                    horizontal
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "black",
        height: "100%",
        width: "100%"
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        backgroundColor: "black",
        alignItems: "center",
        height: 70,
    },
    headerImage: {
        height: 40,
        width: 160,
    },
    userProfile: {
        height: 40,
        width: 40,
        borderRadius: 30
    },
    moviePosterContainer: {
        height: 200,
        width: "100%",
    },
    moviePoster: {
        height: "100%",
        width: "100%"
    },
    moviePosterButton: {
        height: 40,
        width: 100,
        backgroundColor: "#EF1A33",
        borderRadius: 7,
        justifyContent: "space-evenly",
        alignItems: "center",
        marginLeft: 20,
        marginTop: 20,
        flexDirection: "row"
    },
    movieFeedsHeader: {
        height: 20,
        marginTop: 20,
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    movieCard: {
        height: 160,
        width: 105,
        borderRadius: 5,
        marginVertical: 13,
        marginLeft: 20,
        // backgroundColor: "yellow"
    },
    movieCardImage: {
        height: 140,
        width: "100%",
        // backgroundColor: "blue",
        // resizeMode:"contain"
    },
    movieCardImageStyling: {
        height: "100%",
        width: "100%",
        borderRadius: 4,
        resizeMode: "contain"
    },

})

export default HomeScreen;