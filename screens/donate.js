import React, { Component } from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import DropdownMenu from 'react-native-dropdown-menu';

export default class donate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    render() {
        var data = [["cotton", "woolen", "silk", "synthetic"], ["1 pair", "2 pair","3 pairs","4 pairs","Bulk"], ["good condition", "average condition","bad condition"]];
        return (
            <View style={styles.container}>
                <View style={{height: 64}} />
                <DropdownMenu
                    style={{flex: 1}}
                    bgColor={'white'}
                    tintColor={'#666666'}
                    activityTintColor={'green'}
                    optionTextStyle={{color: '#333333'}}
                    titleStyle={{color: '#333333'}}
                    maxHeight={500}
                    handler={(selection, row) => this.setState({text: data[selection][row]})}
                    data={data}
                >

                    <View flex center>
                        <Text>
                            Thanks for donating your clothes  and saving the mother earth
                        </Text>
                    </View>
                    <TouchableHighlight style={[styles.buttonContainer, styles.bButton]} onPress={() => this.onClickListener('sign_up')}>
                        <Text style={styles.bText}>DONATE</Text>
                    </TouchableHighlight>

                </DropdownMenu>

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
    buttonContainer: {
        height:60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:70,
        width:150,
        borderRadius:50,

    },
    bButton: {
        backgroundColor: "#FF4DFF",
        justifyContent: 'center',
        alignItems: 'center',
        height:60,
        marginBottom:70,

    },
    bText: {
        color: 'white',
    }
});