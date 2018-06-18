import React, { Component } from 'react';
import Router from 'next/router'
import BreedsScreen from './../screens/BreedsScreen';
import withNavHeader from '../components/withNavHeader';
import withTabs from '../components/withTabs';
import {mainTabProps, getHighlightedTabs} from '../routeConfig';

const Breeds = (props) => {
    const onBreedClickHandler = (breed) => {
        Router.push({pathname: '/breed', query: {breed}});
    };
    
    return <BreedsScreen onClickHandler={onBreedClickHandler} />;
};

export default withTabs(
    withNavHeader(Breeds)({title: 'Index', hasBackButton: false})
)
({tabProps: getHighlightedTabs(mainTabProps, 0)});