import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 8,
    },
    paragraph: {
        margin: 6,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#C51162',
    },
    txtSaida: {
        margin: 6,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#E91E63',
    },
    txtEntrada: {
        borderWidth: 4,
        textAlign: 'center',
        fontSize: 20,
        borderColor: '#E91E63',
        height: 50,
        color: '#E53935',
        borderRadius: 10,
        marginTop: 10,
    },
    button: {
        backgroundColor: '#E91E63',
        height: 40,
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 20,
        width: 60,
    },
    txtButton: {
        fontSize: 22,
        color: '#FF80AB',
        textAlign: 'center',
    },
    textLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#c51162',
    },
    butoes:{
        flexDirection: 'row',
        height: 40,
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 20,
        gap: 25,
    },
});

export default styles;
