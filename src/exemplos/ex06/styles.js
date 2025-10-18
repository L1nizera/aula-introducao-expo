import { Button, StyleSheet } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#ff6',
            alignItems: 'center',
        },
        input: {
            height: 80,
            textAlign: 'center',
            width: '50%',
            fontSize: 50,
            marginTop: '24',
            color: 'lightgray',
            borderWidth: RFPercentage(0.2),
            borderRadius: RFPercentage(2),
        },
        entradaImc: {
            flex: 1,
            flexDirection: 'row',
        },
        paragraph: {
          fontSize: 25,  
        },
        button: {
            height: 30,
            backgroundColor: '#89FFA5',
            borderRadius: RFPercentage(2.5),
            borderWidth: RFPercentage(0.2),
            marginBottom: RFPercentage(2),
        },
        buttonText: {
            alignSelf: 'center',
            paddin: 30,
            fontSize: 20,
            color: '#6DC4A4',
            fontWeight: 'bold',
        },
        resultados: {
            alignSelf: 'center',
            color: 'lightgray',
            fontSize: 35,
            padding: 15,
            borderWidth: RFPercentage(0.2),
            borderRadius: RFPercentage(2),
            marginBottom: RFPercentage(2),
        }
    }
);
export default styles;
