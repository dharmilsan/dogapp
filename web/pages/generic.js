import React, { Component } from 'react';
import GenericScreen from './../screens/GenericScreen';
import withNavHeader from '../components/withNavHeader';
import withTabs from '../components/withTabs';
import {mainTabProps, getHighlightedTabs} from '../routeConfig';

const Generic = (props) => {
    const WrappedGenericScreen = withTabs(
        withNavHeader(GenericScreen)({title: props.text})
    )({tabProps: getHighlightedTabs(mainTabProps, 1)});

    return <WrappedGenericScreen {...props} />;
};

Generic.getInitialProps = async (props) => {
    return {text: props.query.text, index: props.query.index};
}

export default Generic;