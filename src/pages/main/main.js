import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import api from '../../services/api';
import styles from './styles';

export default class Main extends Component {

    static navigationOptions = {
        title: 'Simple List'
    };
    
    state = {
        info: [],
        docs: [],
        page: 1,
    };

    loadLibs = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);
        const { docs, ...info } = response.data;
        
        this.setState({ 
            docs: [...this.state.docs, ...docs],
            info, 
            page,
        });
    }

    loadMore = () => {
        const { page, info } = this.state;

        if(page === info.pages) return;

        const pageNumber = page + 1;
        this.loadLibs(pageNumber);
    }

    componentDidMount() {
        this.loadLibs();
    }

    renderItem = ({ item }) => (
        <View style={styles.listContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <TouchableOpacity 
                style={styles.button} 
                onPress={() => {
                    this.props.navigation.navigate('Item', {item});
                }}
            >
                    <Text style={styles.textButton}>Acessar</Text>
            </TouchableOpacity>
        </View>
    )

    render() {
        return(
            <View style={styles.container}>
                <FlatList
                    contentContainerStyle={styles.list}
                    data={this.state.docs}
                    keyExtractor={item => item._id}
                    renderItem={this.renderItem}
                    onEndReached={this.loadMore}
                    onEndReachedThreshold={0.1}
                />
            </View>
        );   
    }
}