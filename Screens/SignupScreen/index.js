import React, { useState } from "react";
import auth from '@react-native-firebase/auth';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    ImageBackground,
    TextInput
} from "react-native"
import LoginScreen from "../LoginScreen";



const CheckSignUp = (email, password,navigation) => {
    auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            navigation.navigate('LoginScreen')
            console.log('User account created & signed in!');
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }

            console.error(error);
        });
}

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [passwordErrorMessage, setPasswordErrorMessage] = useState(false)
    const [emailErrorMsg, setEmailErrorMsg] = useState(false)
    const [confirmPasswordErrorMsg, setConfirmPasswordErrorMsg] = useState(false)
    return (
        <View style={styles.mainContainer}>
            <ImageBackground
                resizeMode="cover"
                style={styles.backgroundImage}
                source={require('../../Assets/Images/netflixteaser.png')}
            >
                <View style={styles.mainBody}>
                    <Image
                        style={styles.boxheadingImage}
                        source={require('../../Assets/Images/net.jpg')}
                    />
                    <TextInput
                        style={styles.inputfield}
                        placeholder="Email or Phone Number"
                        onChangeText={(e) => {
                            let regex = /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            console.log(regex.test(e))
                                setEmail(e)
                            if (regex.test(e)) {
                                setEmailErrorMsg(false)
                            } else {
                                setEmailErrorMsg(true)
                            }
                        }}
                    />
                    {
                        emailErrorMsg && <Text style={{ color: "red" }}>
                            Invalid Email
                        </Text>}

                    {console.log(setEmail)}
                    <TextInput
                        style={styles.inputfield}
                        placeholder="Password"
                        onChangeText={(e) => {
                            let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,20}$/
                                setPassword(e)
                            if (regex.test(e)) {
                                setPasswordErrorMessage(false)
                            } else {
                                setPasswordErrorMessage(true)
                            }
                        }}
                    />
                    {
                        passwordErrorMessage && <Text style={{ color: "red" }}>
                            Invalid Password
                        </Text>
                    }
                    <TextInput
                        style={styles.inputfield}
                        placeholder="Confirm Password"
                        onChangeText={(e) => {
                                setConfirmPassword(e)
                            if (e == password) {
                                setConfirmPasswordErrorMsg(false)
                            } else {
                                setConfirmPasswordErrorMsg(true)
                            }
                        }}
                    />
                    {
                        confirmPasswordErrorMsg && <Text style={{ color: "red" }}>
                            Password not matched
                        </Text>
                    }
                    <TouchableOpacity style={styles.signupButton}
                        onPress={() => {
                            CheckSignUp(email, password,navigation)
                        }}>
                        <Text style={styles.signupText}>
                            Sign up
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.texts}>
                        Remember my login
                    </Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.texts}>
                            Already on Netflix?
                        </Text>
                        <TouchableOpacity style={{ marginLeft: 5 }}>
                            <Text style={styles.clickabletexts}>
                                Sign in
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    backgroundImage: {
        // height: "100%",
        // width: "100%",
        flex: 1,
        resizeMode: "cover",
    },
    mainBody: {
        height: 500,
        width: 340,
        borderRadius: 5,
        backgroundColor: '#000000a0',
        alignItems: "center",
        marginHorizontal: 28,
        marginVertical: 100
    },
    boxheadingImage: {
        height: 80,
        width: 60,
        marginVertical: 30
    },
    inputfield: {
        backgroundColor: "white",
        width: "75%",
        borderRadius: 5,
        paddingLeft: 10,
        marginVertical: 10,
        fontSize: 13
    },
    signupButton: {
        height: 40,
        width: "75%",
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        marginVertical: 10
    },
    signupText: {
        fontWeight: "bold",
        color: "white",
        fontSize: 15
    },
    texts: {
        fontSize: 12,
        color: "white",
        marginVertical: 8
    },
    clickabletexts: {
        fontSize: 12,
        marginVertical: 8,
        color: "red",
        fontWeight: "bold"
    }
})

export default SignupScreen;
