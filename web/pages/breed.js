import React, { Component } from 'react';
import BreedScreen, * as bs from './../screens/BreedScreen';

const Breed = (props) => {
    console.log(props);
    return <BreedScreen {...props} />;
}

Breed.getInitialProps = async (props) => {
    console.log(props);
    return await bs.loadData(props.query);
}

export default Breed;