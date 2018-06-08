import React, { Component } from 'react';
import BreedScreen, * as bs from './../screens/BreedScreen';

class Breed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {breed: this.props.navigation.getParam('breed')};
    }

    async componentDidMount() {
        const breed = this.state.breed;
        const newState = await bs.loadData({breed});
        this.setState(newState);    
    }

    render() {
        console.log(`state=${this.state}`);
        return <BreedScreen {...this.state} />;
    }
}

export default Breed;