import { StyleSheet } from 'react-native';

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

export default styles;