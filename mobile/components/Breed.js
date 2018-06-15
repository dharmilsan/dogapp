import React, { Component } from 'react';
import BreedScreen, * as bs from './../screens/BreedScreen';

const Breed = (props) => {
    const breed = props.navigation.getParam('breed');
    return <BreedScreen breed={breed} {...props} />;
}

Breed.navigationOptions = ({navigation}) => {
    const breed = navigation.getParam('breed');
    return {title: breed}
};

export default Breed;