import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const Tab = ({name, onPressHandler, iconClasses, isSelected}) => {
    const textStyle = (isSelected) ? styles.textSelectedColor : styles.textColor;

    return <TouchableOpacity key = {name} style={styles.buttonView} onPress={onPressHandler}>
        <Text style={textStyle}><i className={iconClasses}></i></Text>
        <Text style={[textStyle, styles.textSize]} >{name}</Text>
        </TouchableOpacity>;
}

Tab.propTypes = {
    name: PropTypes.string.isRequired,
    onPressHandler: PropTypes.func.isRequired,
    iconClasses: PropTypes.string.isRequired,
    isSelected: PropTypes.bool,
}

const Tabs = (props) => {
    const {tabProps} = props;

    return <View style={styles.container}>
        <View style={styles.content}>
            {tabProps.map((tabProp) => Tab(tabProp))}
        </View>
    </View>;
}

Tabs.propTypes = {
    tabProps: PropTypes.arrayOf(PropTypes.shape(Tab.propTypes)).isRequired,
}

const styles = StyleSheet.create({
    container: {
        flex: 0, //no resizing for our header!
        justifyContent: 'center',
        //alignItems: 'center',
        height: '25%',
        minHeight: 46,
        borderTopWidth: 0.1,
        borderTopColor: 'gray',
    },
    content: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 6
    },
    buttonView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textColor: {
        color: 'gray',
    },
    textSelectedColor: {
        color: '#3d85c3',
    },
    textSize: {
        fontSize: '0.85rem',
    },
})

export const withCustomTabs = (CustomTabs) => (WrappedComponent) => (tabProps) => {
    return class extends React.Component {
        render() {
            return <View style={{flex: 1}}>
            <ScrollView contentContainerStyle={{flex: 1}}>
                <WrappedComponent {...this.props} />
            </ScrollView>
            <CustomTabs {...tabProps} />
            </View>;
        }
    }
}

export const withTabs = (WrappedComponent) => (tabProps) => {
    return withCustomTabs(Tabs)(WrappedComponent)(tabProps);
}

export default withTabs;