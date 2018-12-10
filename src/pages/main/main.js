import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import api from '../../services/api';
import Status from '../../components/StatusBar';

export default class Main extends Component {

    static navigationOptions = {
        title: 'Bibliotecas JS'
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

          <Status />

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

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fafafa',
  },

  listContainer: {
      backgroundColor: '#FFF',
      marginBottom: 20,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#DDD',
      padding: 20,
  },

  list: {
      padding: 20,
  },

  title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
  },

  description: {
      fontSize: 16,
      lineHeight: 24,
      color: '#999',
      marginTop: 5,
  },

  button: {
      borderWidth: 2,
      borderColor: '#DA552F',
      borderRadius: 5,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      backgroundColor: 'transparent',
  },

  textButton: {
      color: '#DA552F',
      fontWeight: 'bold',
      fontSize: 16,
  },
});
