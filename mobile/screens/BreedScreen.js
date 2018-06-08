import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import fetch from 'isomorphic-unfetch'
import PropTypes from 'prop-types';

const BreedScreen = (props) => {
    return <View style={styles.container}>
            <Text>Breed Page - {props.breed}</Text>
            <Image style={{width: 200, height: 200}} source={{uri: props.imageUrl}} />
            </View>;
}

BreedScreen.propTypes = {
    breed: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
}

const loadData = async (props) => {
    const url = `https://dog.ceo/api/breed/${props.breed}/images/random`;

    const response = await fetch(url);
    const json = await response.json();

    return {breed: props.breed, imageUrl: json.message};
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export {BreedScreen as default, loadData};