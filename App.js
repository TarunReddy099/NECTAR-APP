/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableHighlight,Button} from 'react-native';


type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}> WELCOME TO NECTAR </Text>
                <Text style={styles.instructions}> LETS SAVE THE MOTHER EARTH</Text>


                <TouchableHighlight style={[styles.buttonContainer, styles.Bbutton]} onPress={() => this.onClickListener('sign_up')}>
                    <Text style={styles.signUpText}>BUY</Text>
                </TouchableHighlight>

                <TouchableHighlight style={[styles.buttonContainer, styles.Bbutton]} onPress={() => this.onClickListener('sign_up')}>
                    <Text style={styles.signUpText}>DONATE</Text>
                </TouchableHighlight>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00b5ec',
    },
    welcome: {
        fontSize: 40,
        textAlign: 'center',
        margin: 10,
        color : 'white',
    },
    instructions: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        marginBottom: 5,
    },
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:190,
        borderRadius:30,
    },
    Bbutton: {
        backgroundColor: "#FF4DFF",
    },
    signUpText: {
        fontSize:20,
        color: 'white',
    }
});