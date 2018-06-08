import React, { Component } from 'react';
import BreedsScreen from './../screens/BreedsScreen';

const Breeds = (props) => {
    const onBreedClickHandler = (breed) => {
        props.navigation.navigate('Breed', {breed});
    };
    
    return <BreedsScreen onClickHandler={onBreedClickHandler} />;
};

export default Breeds;