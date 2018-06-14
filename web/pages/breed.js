import React, { Component } from 'react';
import BreedScreen, * as bs from './../screens/BreedScreen';
import withNavHeader from '../components/withNavHeader';

const Breed = (props) => {
    const WrappedBreedScreen = withNavHeader(BreedScreen)({title: props.breed});
    return <WrappedBreedScreen {...props} />;
}

Breed.getInitialProps = async (props) => {
    // return await bs.loadData(props.query);
    return {breed: props.query.breed};
}

export default Breed;