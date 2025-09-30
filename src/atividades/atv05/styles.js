import { StyleSheet } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container: { 
            flex: 1,
            padding: 2,
            backgroundColor: '#ff0', 
            alignItems: 'center', 
            justifyContent: 'center',
            borderRadius: 20,
            gap: RFPercentage(2.5),
        },
        txtSaida: {
            margin: 6,
            fontSize: 22,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#E91E63'
        },
        txtEntrada: {
            borderWidth: 4,
            textAlign: 'center',
            fontSize: 22,
            borderColor: '#E91E63',
            height: 40,
            color: '#53935',
            borderRadius: 10,
            marginTop: 10,
        },
        button: {
            backgroundColor: '#E91E63',
            height: 40,
            justifyContent: 'center',
            borderRadius: 10,
            marginTop: 20,
        },
        textButton: {
            fontSize: 20,
            color: '#FF80AB',
            textAlign: 'center',
        },
        textLabel: {
            fontsize: 16,
            fontWeight: 'bold',
            color: '#C51162',
        },
        }
);  

export default styles;