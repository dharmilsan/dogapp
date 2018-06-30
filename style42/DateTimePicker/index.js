import {Platform} from 'react-native';
import DateTimePicker from './DateTimePicker';

//import global font some time

// const requireAndPassProps = (name) => (props) => {
//     const component = require(name);
//     return <component {...props} />;
// }

// const Component = (props) => Platform.select({
//     ios: () => requireAndPassProps('react-native-datepicker')(props),
//     android: () => requireAndPassProps('react-native-datepicker')(props),
//     web: () => requireAndPassProps('./DateTimePicker.web')(props),
// });

export default DateTimePicker;