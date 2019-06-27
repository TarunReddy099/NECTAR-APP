import * as React from 'react';
import { Text, View, StyleSheet, Image,ScrollView } from 'react-native';
import { Card } from 'react-native-paper';

export default class producthome extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>
                    LIST OF PRODUCTS
                </Text>
                <ScrollView>
                    <Card >
                        <View style={{ alignItems: 'center' }}>
                            <Image
                                source={{
                                    uri:
                                        '/Users/arunkarka/WebstormProjects/NECTAR-APP/images/a.jpg',
                                }}
                                style={{
                                    width: 140,
                                    height: 140,
                                }}
                            />
                        </View>
                        <Text style={styles.paragraph}>
                            JEANS BAG
                        </Text>
                    </Card>
                    <Card>
                        <View style={{ alignItems: 'center' }}>
                            <Image
                                source={{
                                    uri:
                                        '/Users/arunkarka/WebstormProjects/NECTAR-APP/images/slingbag.jpg',
                                }}
                                style={{
                                    width: 140,
                                    height: 140,
                                }}
                            />
                        </View>
                        <Text style={styles.paragraph}>
                            SLING BAG
                        </Text>
                    </Card>
                    <Card>
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
                    <Card >
                        <View style={{ alignItems: 'center' }}>
                            <Image
                                source={{
                                    uri:
                                        '/Users/arunkarka/WebstormProjects/NECTAR-APP/images/penstand.jpg',
                                }}
                                style={{
                                    width: 140,
                                    height: 140,
                                }}
                            />
                        </View>
                        <Text style={styles.paragraph}>
                            PEN STAND
                        </Text>
                    </Card>

                    <Card >
                        <View style={{ alignItems: 'center' }}>
                            <Image
                                source={{
                                    uri:
                                        '/Users/arunkarka/WebstormProjects/NECTAR-APP/images/gunnybag.jpg',
                                }}
                                style={{
                                    width: 140,
                                    height: 140,
                                }}
                            />
                        </View>
                        <Text style={styles.paragraph}>
                            GUNNY BAG
                        </Text>
                    </Card>

                </ScrollView>
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
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});