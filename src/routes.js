import { createStackNavigator } from 'react-navigation';
import Main from './pages/main/main';
import Item from './pages/item/item';

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