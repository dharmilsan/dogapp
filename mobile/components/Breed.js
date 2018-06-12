import React, { Component } from 'react';
import BreedScreen, * as bs from './../screens/BreedScreen';

const Breed = (props) => {
    const breed = props.navigation.getParam('breed');
    return <BreedScreen breed={breed} {...props} />;
}

Breed.navigationOptions = {
    title: 'Breed Page'
};

export default Breed;