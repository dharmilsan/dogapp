import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import fetch from 'isomorphic-unfetch'
import PropTypes from 'prop-types';
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_DOG_PHOTO = gql`
  query dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

const BreedScreen = (props) => {
    console.log(props);
    return <Query query={GET_DOG_PHOTO} variables={{ breed: props.breed }}>
        {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>;
      if (error) {
          console.log(error);
          return <Text>Error!</Text>;
      } 

      return (
        <View style={styles.container}>
        <Text>Breed Page - {props.breed}</Text>
        <Image style={{width: 200, height: 200}} source={{uri: data.dog.displayImage}} />
    </View>
          );
    }}
    </Query>;
}

BreedScreen.propTypes = {
    breed: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default BreedScreen;