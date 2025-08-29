import { View, Text } from 'react-native'; 

import styles from './styles';

export default function Atividades() {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 1</Text>
            <Text style={styles.txt} >Introdução React Native com Expo</Text>
            <Text style={styles.vct} >HOJE TEM VCT AMÉRICAS </Text>
            <Text style={styles.txt1} >TOP DEMAIS ZÉ</Text>
        </View>
        
    );
}

