import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class DateTimePicker extends React.Component {
    constructor(props) {
        super(props);
    }

    onChangeHandler = (e) => {
        const val = e.target.value;
        const convertedData = (formatMap[this.props.mode] === this.props.format) ? 
        val : timeFromTo(formatMap[this.props.mode], this.props.format, val);
        this.props.onDateChange(convertedData);
    }
 
    render() {
        const realData = (this.props.date) ? 
            timeFromTo(this.props.format, formatMap[this.props.mode], this.props.date) : moment().format(formatMap[this.props.mode]);

        return <input value={realData} type = {modeTypeMap[this.props.mode]} onChange={this.onChangeHandler} style={this.props.style} />;
    }
}

DateTimePicker.propTypes = {
    onDateChange: PropTypes.func.isRequired,
    mode: PropTypes.oneOf(['date', 'time', 'datetime']).isRequired,
    date: PropTypes.string.isRequired,
    format: PropTypes.string.isRequired,
    style: PropTypes.object,
}

const modeTypeMap = {date: "date", datetime: "datetime-local", time: "time"};
const formatMap = {date: "YYYY-MM-DD", datetime: "YYYY-MM-DDTHH:mm", time: "HH:mm"};
const timeFromTo = (oldFormat, newFormat, data) => moment(data, oldFormat).format(newFormat);

export default DateTimePicker;