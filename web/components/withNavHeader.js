import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

const NavHeader = (props) => {
    return <View style={styles.container}>
        <View style={styles.content}>
            <Text onPress={() => console.log("man")}>Back</Text>
            <Text>{props.title}</Text>
            <Text>Next</Text>
        </View>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 0, //no resizing for our header!
        justifyContent: 'center',
        //alignItems: 'center',
        height: '25%',
        minHeight: 44,
        backgroundColor: 'gray',
    },
    content: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
    }
})

const withNavHeader = (WrappedComponent) => (props) => {
    return class extends React.Component {
        render() {
            const {title} = props;
            return <View style={{flex: 1}}>
            <NavHeader title={title} />
            <ScrollView contentContainerStyle={{flex: 1}}>
                <WrappedComponent {...this.props} />
            </ScrollView>
        </View>;
        }
    }
}

export default withNavHeader;