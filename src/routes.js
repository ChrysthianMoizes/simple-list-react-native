import { createStackNavigator } from 'react-navigation';
import Main from './pages/main';

const headerConfig = {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#DA552F'
        },
        headerTintColor: '#FFF'
    },
};

export default createStackNavigator({
    Main
}, headerConfig);