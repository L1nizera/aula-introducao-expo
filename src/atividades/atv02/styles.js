import { StyleSheet } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container: { 
            flex: 1,
            padding: 8,
            backgroundColor: '#fff', 
            alignItems: 'center', 
            borderRadius: 20,
        }, 
        titulo: {
            fontSize: RFPercentage(5), 
            fontWeight: 'bold', 
            color: '#deepskyblue',
            marginTop: 10,
            marginBottom: 10,
            padding: 8,
            width: '100%',
            height: 120,
            textAlign: 'center',
            textAlignVertical: 'center',
            borderRadius: 20,
        },
        imagem: {

            width:'80%',
            resizeMode: 'contain',
        },
    }
);  

export default styles;