import React, {Component} from 'react';
import {Text, View,Button,StyleSheet} from 'react-native';


type Props = {};
export default class confirm extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}> TARUN REDDY</Text>
                <Text style={styles.instructions}>Thanks for shopping with nectar your product will be delivered within 7 working days</Text>
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
        fontSize: 50,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        fontSize: 20,
        color: '#333333',
        marginBottom: 5,
    },
});