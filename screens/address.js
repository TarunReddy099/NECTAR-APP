import React, { Component } from 'react'
import { View, Text, TextInput,TouchableOpacity, StyleSheet } from 'react-native'

class address extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <TextInput style = {styles.input}
                           underlineColorAndroid = "transparent"
                           placeholder = "HOUSE/FLATNO"
                           placeholderTextColor = "black"
                           autoCapitalize = "none"
                           backgroundColor = "white"
                           onChangeText = {this.handleEmail}/>

                <TextInput style = {styles.input}
                           underlineColorAndroid = "transparent"
                           placeholder = "ADDRESS"
                           placeholderTextColor = "black"
                           backgroundColor = "white"
                           autoCapitalize = "none"
                           onChangeText = {this.handlePassword}/>
                <TextInput style = {styles.input}
                           underlineColorAndroid = "transparent"
                           placeholder = "LANDMARK"
                           placeholderTextColor = "black"
                           backgroundColor = "white"
                           autoCapitalize = "none"
                           onChangeText = {this.handlePassword}/>
                <TextInput style = {styles.input}
                           underlineColorAndroid = "transparent"
                           placeholder = "PIN-CODE"
                           placeholderTextColor = "black"
                           backgroundColor = "white"
                           autoCapitalize = "none"
                           onChangeText = {this.handlePassword}/>
                <Text >                         IF YOU ARE A STUDENT       </Text>
                <TextInput style = {styles.input}
                           underlineColorAndroid = "transparent"
                           placeholder = "COLLEGE/SCHOOL NAME"
                           placeholderTextColor = "black"
                           autoCapitalize = "none"
                           backgroundColor = "white"
                           onChangeText = {this.handlePassword}/>
                <TextInput style = {styles.input}
                           underlineColorAndroid = "transparent"
                           placeholder = "DEPARTMENT/CLASS"
                           placeholderTextColor = "black"
                           autoCapitalize = "none"
                           backgroundColor = "white"
                           onChangeText = {this.handlePassword}/>
                <TextInput style = {styles.input}
                           underlineColorAndroid = "transparent"
                           placeholder = "SECTION"
                           placeholderTextColor = "black"
                           autoCapitalize = "none"
                           backgroundColor = "white"
                           onChangeText = {this.handlePassword}/>
                <TextInput style = {styles.input}
                           underlineColorAndroid = "transparent"
                           placeholder = "ROLL NUMBER"
                           placeholderTextColor = "black"
                           autoCapitalize = "none"
                           backgroundColor = "white"
                           onChangeText = {this.handlePassword}/>


                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress = {
                        () => this.login(this.state.email, this.state.password)
                    }>
                    <Text style = {styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>

            </View>
        )
    }
}
export default Inputs

const styles = StyleSheet.create({

    container: {
        paddingTop: 23,
        backgroundColor: '#00b5ec',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        margin: 15,
        height: 40,
        borderColor:"white",
        borderWidth: 1,
        borderRadius: 30,
        textAlign: 'center',
        width:250,
        height:45
    },
    submitButton: {
        backgroundColor: '#FF4DFF',
        padding: 10,
        margin: 15,
        height: 40,
        borderRadius: 30,
    },
    submitButtonText:{
        color: 'white',
        justifyContent: 'center',
        textAlign: 'center'
    }
})