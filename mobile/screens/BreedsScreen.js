import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, FlatList} from 'react-native';
import PropTypes from 'prop-types';

//some es6 features are failing. need to look into the config

let myOnClickHandler;

const BreedsScreen = (props) => {
    myOnClickHandler = props.onClickHandler;

    return <View style={styles.container}>
    <Text style={{fontWeight: 'bold'}}>Breeds Home Page</Text>
    <DogsView breeds={breeds} {...props} />
    </View>;
};

BreedsScreen.propTypes = {
    onClickHandler: PropTypes.func.isRequired,
}

const DogsView = (props) => {
    return <FlatList
    data={Object.keys(props.breeds)}
    renderItem={renderBreed}
    keyExtractor={(item) => item}
      />;
}

const renderBreed = (props) => {
    const item = props.item;
    return <Button title={item} onPress={() => myOnClickHandler(item)} />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const breeds = {"affenpinscher": [],
"african": [],
"airedale": [],
"akita": [],
"appenzeller": [],
"basenji": [],
"beagle": [],
"bluetick": [],
"borzoi": [],
"bouvier": [],
"boxer": [],
"brabancon": [],
"briard": [],
"bulldog": [
    "boston",
    "french"
],
"bullterrier": [
    "staffordshire"
],
"cairn": [],
"chihuahua": [],
"chow": [],
"clumber": [],
"collie": [
    "border"
],
"coonhound": [],
"corgi": [
    "cardigan"
],
"dachshund": [],
"dalmatian": [],
"dane": [
    "great"
],
"deerhound": [
    "scottish"
],
"dhole": [],
"dingo": [],
"doberman": [],
"elkhound": [
    "norwegian"
],
"entlebucher": [],
"eskimo": [],
"germanshepherd": [],
"greyhound": [
    "italian"
],
"groenendael": [],
"hound": [
    "afghan",
    "basset",
    "blood",
    "english",
    "ibizan",
    "walker"
],
"husky": [],
"keeshond": [],
"kelpie": [],
"komondor": [],
"kuvasz": [],
"labrador": [],
"leonberg": [],
"lhasa": [],
"malamute": [],
"malinois": [],
"maltese": [],
"mastiff": [
    "bull",
    "tibetan"
],
"mexicanhairless": [],
"mix": [],
"mountain": [
    "bernese",
    "swiss"
],
"newfoundland": [],
"otterhound": [],
"papillon": [],
"pekinese": [],
"pembroke": [],
"pinscher": [
    "miniature"
],
"pointer": [
    "german"
],
"pomeranian": [],
"poodle": [
    "miniature",
    "standard",
    "toy"
],
"pug": [],
"pyrenees": [],
"redbone": [],
"retriever": [
    "chesapeake",
    "curly",
    "flatcoated",
    "golden"
],
"ridgeback": [
    "rhodesian"
],
"rottweiler": [],
"saluki": [],
"samoyed": [],
"schipperke": [],
"schnauzer": [
    "giant",
    "miniature"
],
"setter": [
    "english",
    "gordon",
    "irish"
],
"sheepdog": [
    "english",
    "shetland"
],
"shiba": [],
"shihtzu": [],
"spaniel": [
    "blenheim",
    "brittany",
    "cocker",
    "irish",
    "japanese",
    "sussex",
    "welsh"
],
"springer": [
    "english"
],
"stbernard": [],
"terrier": [
    "american",
    "australian",
    "bedlington",
    "border",
    "dandie",
    "fox",
    "irish",
    "kerryblue",
    "lakeland",
    "norfolk",
    "norwich",
    "patterdale",
    "scottish",
    "sealyham",
    "silky",
    "tibetan",
    "toy",
    "westhighland",
    "wheaten",
    "yorkshire"
],
"vizsla": [],
"weimaraner": [],
"whippet": [],
"wolfhound": [
    "irish"
]};

export default BreedsScreen;