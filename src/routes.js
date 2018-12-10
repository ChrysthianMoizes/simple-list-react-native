import { createStackNavigator } from 'react-navigation';
import Main from './pages/Main';
import Item from './pages/Item';

const headerConfig = {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#DA552F'
        },
        headerTintColor: '#FFF'
    },
};

export default createStackNavigator({
    Main,
    Item
}, headerConfig);
