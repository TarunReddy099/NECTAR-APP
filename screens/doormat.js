import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import { Card } from 'react-native-paper';
import Button from "react-native-button";

export default class doormat extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>
                    DOORMAT

                </Text>

                <Card style={styles.cad}  >
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            source={{
                                uri:
                                    '/Users/arunkarka/WebstormProjects/NECTAR-APP/images/doormat.jpg',
                            }}
                            style={{
                                width: 140,
                                height: 140,
                            }}
                        />
                    </View>
                    <Text style={styles.paragraph}>
                        DOORMAT
                    </Text>
                </Card>
                <Card style={styles.cad}  >
                    <View style={{ alignItems: 'center' }}>
                    </View>
                    <Text style={styles.paragraph}>
                        MRP:-50 (OR) 50 NECTAR CREDITS
                    </Text>
                </Card>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 30,
        backgroundColor: '#00b5ec',
        padding: 8,
    },
    signinButton: {
        backgroundColor: "#FF4DFF",
    },
    signinButtonText: {
        color: 'white',
    },
    cad: {
        justifyContent: 'center',
        alignItems :'center',
        paddingTop: 10,
        flexDirection:'row',

    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',

    },
});