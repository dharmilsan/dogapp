import React, { Component } from 'react';
import {Text, View, Picker} from 'react-native';
import DateTimePicker from './../style42/DateTimePicker';
import Icon from '../icons/Icon';

class GenericScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {language: 'java', datetime: '', time: '', date: ''};
    }

    render() {
        const style = {flex: 1, justifyContent: 'center', alignItems: 'center'};
        const props = this.props;

        return <View style={style}>
                <Text>{props.text}</Text>

                <Picker
                    selectedValue={this.state.language}
                    style={{width: '70%' }}
                    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
                <Text> </Text>

                <DateTimePicker
                    date={this.state.datetime}           
                    style={{width: '70%'}}
                    mode="datetime"
                    format="YYYY-MM-DD HH:mm"
                    onDateChange={(datetime) => {this.setState({datetime: datetime})}} 
                />
                <Text>Datetime now is {this.state.datetime}</Text>
                <Text> </Text>

                <DateTimePicker
                    date={this.state.time}           
                    style={{width: '70%'}}
                    mode="time"
                    format="HH:mm"
                    onDateChange={(time) => {this.setState({time: time})}} 
                />
                <Text>Time now is {this.state.time}</Text>
                <Text> </Text>

                <DateTimePicker
                    date={this.state.date}           
                    style={{width: '70%'}}
                    mode="date"
                    format="YYYY-MM-DD"
                    onDateChange={(date) => {this.setState({date: date})}} 
                />
                <Text>Date now is {this.state.date}</Text>
                <Text> </Text>
                <Text>Simple text</Text>
                <Icon name="Facebook" color = "red" width="40" height="40"/><Icon color = "red" color="red" name = "Instagram" width="40" height="40" />

                </View>;
    }
}

export default GenericScreen;