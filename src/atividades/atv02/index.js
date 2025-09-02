import { View, Text, Image } from 'react-native'; 

import styles from './styles';
import img from 'D:/TEMP/Rhyan_Augusto/aula-introducao-expo/assets/002-1-react-native.png';

import Mensagem from './mensagem';
function Exemplo03() {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 2</Text>
            <Image source={img} style={styles.imagem}/>

            <Mensagem titulo={'Camisa Branca e Preta'}>TESTEAAAAA</Mensagem>
            <Mensagem titulo={'Camisa Preta'}>Acesso permitido</Mensagem>
            <Mensagem titulo={'Camisa Listrada'}>O tempo acabou!</Mensagem>
            <Mensagem titulo={'Camisa São Jorge'}>Camisa modelo 2012.</Mensagem>

        </View>
        
    );
}

export default Exemplo03;