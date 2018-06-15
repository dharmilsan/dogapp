import React, { Component } from 'react';
import GenericScreen from './../screens/GenericScreen';

const Generic = (props) => {
    console.log(JSON.stringify(props));
    const title = props.navigation.state.routeName;
    return <GenericScreen text={title} {...props} />;
}

Generic.navigationOptions = (props) => {
    const title = props.navigation.state.routeName;
    return {title: title};
};

export default Generic;