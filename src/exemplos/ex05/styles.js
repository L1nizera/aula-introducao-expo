import { Button, StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#ff6',
            alignItems: 'center',
        },


        titulo: {
            fontSize: RFPercentage(5),
            fontWeight: 'bold',
            color: 'darkslategrey',
            margin: RFPercentage(5),
        },


        txt: {
            fontSize: RFPercentage(2.5),
        },
        txtEntrada: {
            borderWidth: 4,
            textAlign: 'center',
            fontSize: 22,
            borderColor: '#E91E63',
            height: 55,
            color: '#E53935',
            borderRadius: 10,
            width: 100,
            marginTop: 10,
        },
        txtSaida: {
            margin: 6,
            fontSize: 22,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#E91E63',
        },
        input: {
            borderWidth: RFPercentage(0.5),
            borderColor: 'darkslategrey',
            width: '80%',
            borderRadius: RFPercentage(1.5),
            padding: RFPercentage(1.5),
            fontSize: RFPercentage(2),
            textAlign: 'center',
        },
        textLabel: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#C51162',
        },


        Button: {
            backgroundColor: '#E91E63',
            height: 40,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
        },


        txtBotao: {
            backgroundColor: '#E91E63',
            borderWidth: 2,
            borderRadius: 10,
            alignItems: 'center',
            marginTop: 10,
        },
    }
);
export default styles;
