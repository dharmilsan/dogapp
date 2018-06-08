import React, { Component } from 'react';
import Router from 'next/router'
import BreedsScreen from './../screens/BreedsScreen';

const Breeds = (props) => {
    const onBreedClickHandler = (breed) => {
        Router.push({pathname: '/breed', query: {breed}});
    };
    
    return <BreedsScreen onClickHandler={onBreedClickHandler} />;
};

export default Breeds;