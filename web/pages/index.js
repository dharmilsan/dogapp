import React, { Component } from 'react';
import Router from 'next/router'
import BreedsScreen from './../screens/BreedsScreen';
import withNavHeader from '../components/withNavHeader';

const Breeds = (props) => {
    const onBreedClickHandler = (breed) => {
        Router.push({pathname: '/breed', query: {breed}});
    };
    
    return <BreedsScreen onClickHandler={onBreedClickHandler} />;
};

export default withNavHeader(Breeds)({title: 'Breeds'});