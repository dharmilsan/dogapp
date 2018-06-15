import React, { Component } from 'react';
import {Text, View} from 'react-native';

const GenericScreen = (props) => {
    const style = {flex: 1, justifyContent: 'center', alignItems: 'center'};
    return <View style={style}>
            <Text>{props.text}</Text>
            </View>;
}

export default GenericScreen;