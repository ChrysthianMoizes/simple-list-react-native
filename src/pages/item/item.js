import React from 'react';
import { WebView } from 'react-native';

const Item = ({ navigation }) => (
    <WebView source={{ uri: navigation.state.params.item.url }}/>
);

Item.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.item.title
});

export default Item;