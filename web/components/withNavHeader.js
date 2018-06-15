import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

const onPressHandler = (e, url) => {
    if(url) {
        window.location = url;
    }
    else {
        window.history.back();
    }
}

const NavHeader = (props) => {
    return <View style={styles.container}>
        <View style={styles.content}>
            <View style = {styles.leftContainer}>
                <Text style={[styles.textColor, styles.leftButton]} onPress={(e) => onPressHandler(e, props.backUrl)}><i className="fas fa-arrow-left fa-lg"></i></Text>
                <Text style={[styles.textColor, styles.titleStyle]}>{props.title}</Text>
            </View>
            <Text style={[styles.textColor, styles.right]}><i className="fas fa-share-alt-square fa-lg"></i></Text>
        </View>
    </View>;
}

NavHeader.propTypes = {
    title: PropTypes.string.isRequired,
    backUrl: PropTypes.string,
}

const styles = StyleSheet.create({
    container: {
        flex: 0, //no resizing for our header!
        justifyContent: 'center',
        //alignItems: 'center',
        height: '25%',
        minHeight: 44,
        backgroundColor: '#3d85c3',
    },
    content: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    leftContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftButton: {
        paddingLeft: 20,
    },
    titleStyle: {
        marginLeft: 35,
        fontSize: '1.25rem',
    },
    right: {
        paddingRight: 20,
    },
    textColor: {
        color: '#fff',
    },
})

export const withCustomNavHeader = (CustomNavHeader) => (WrappedComponent) => (navProps) => {
    return class extends React.Component {
        render() {
            return <View style={{flex: 1}}>
            <CustomNavHeader {...navProps} />
            <ScrollView contentContainerStyle={{flex: 1}}>
                <WrappedComponent {...this.props} />
            </ScrollView>
            </View>;
        }
    }
}

export const withNavHeader = (WrappedComponent) => (navProps) => {
    return withCustomNavHeader(NavHeader)(WrappedComponent)(navProps);
}

export default withNavHeader;