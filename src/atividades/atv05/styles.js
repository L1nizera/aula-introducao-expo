import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 15,
        backgroundColor: '#e7b0ffff'
    },
    paragraph: {
        margin: 6,
        fontSize: 70,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#5d0184ff',
        bottom: RFPercentage(15),
    },
    txtSaida: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#772aa0ff',
        bottom: RFPercentage(10)
    },
    txtSinal: {
        paddingTop: 10,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#772aa0ff',
        bottom: RFPercentage(7.5),
    },
    txtEntrada: {
        borderWidth: 4,
        textAlign: 'center',
        fontSize: 20,
        borderColor: '#4f0885ff',
        height: 40,
        color: '#4f0885ff',
        borderRadius: 10,
        marginTop: 10,
        bottom: RFPercentage(10),
    },
    button: {
        backgroundColor: '#8a17addb',
        height: 40,
        justifyContent: 'center',
        borderRadius: 60,
        marginTop: 20,
        width: 40,
    },
    txtButton: {
        fontSize: 22,
        color: '#000000ff',
        textAlign: 'center',
    },
    textLabel: {
        bottom: RFPercentage(8.8),
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000ff',
    },
    butoes: {
        flexDirection: 'row',
        height: 40,
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 20,
        gap: 25,
        bottom: RFPercentage(12),
    },
    txtN1: {
        borderWidth: 4,
        borderColor: '#4f0885ff',
        borderRadius: 100,
        bottom: RFPercentage(8),
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000ff',
        textAlign: 'center',
    },
    txtN2: {
        borderWidth: 4,
        borderColor: '#4f0885ff',
        borderRadius: 100,
        bottom: RFPercentage(7),
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000ff',
        textAlign: 'center',
    },
    txtTotal: {
        borderWidth: 4,
        borderColor: '#4f0885ff',
        borderRadius: 100,
        bottom: RFPercentage(8.5),
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000ff',
        textAlign: 'center',
    },
    labelN1: {
        bottom: RFPercentage(8.8),
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000ff',
    },
    labelN2: {
        bottom: RFPercentage(7.8),
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000ff',
    }
});

export default styles;
