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
        titulo:{
            fontSize: RFPercentage(5),
            fontWeight: 'bold',
            color: '#777',
            ottom: RFPercentage(25),
            
        },
        texto:{
            fontSize: RFPercentage(2.5),
            backgroundColor: '#777',
            borderRadius: RFPercentage(1.5),
        },

        textonumero:{
            backgroundColor:'#abc',
            borderRadius: RFPercentage(1.5),
            padding: RFPercentage(0.4),
            fontSize: RFPercentage(2.5),
            borderWidth: RFPercentage(0.2),
        },
        Direita:{

            backgroundColor:'#777',
            width:'10%',
            borderRadius: RFPercentage(1.5),
            alignItems:'center',
            borderWidth: RFPercentage(0.2),
            

        },

        Esquerda:{

            borderWidth: RFPercentage(0.2),
            backgroundColor:'#777',
            width:'10%',
            borderRadius: RFPercentage(1.5),
            alignItems: 'center',

        },

        Embaixo:{
            backgroundColor:'#777',
            width:'25%',
            borderRadius: RFPercentage(2),
            alignItems: 'center',
            borderWidth: RFPercentage(0.2),
        },
        }
);  

export default styles;