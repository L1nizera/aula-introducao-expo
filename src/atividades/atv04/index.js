import { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';

export default function Atividade4() {

    const [texto, setTexto] = useState('');
    const [txt2, setTxt2] = useState('');
    const [mensagem, setMensagem] = useState('');

    function handleExibeMensagem(){
        setMensagem(txt2)
        setTxt2('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 4</Text>
            <Text style={styles.txt}>{texto}</Text>

            <TextInput
            onChangeText={setTexto}
            placeholder='texto de fundo'
            keyboardType='ascii-capable'
            //editable={false}
            //multline
            //numberOfLines={4}
            maxLength={7}
            //secureTextEntry
            style={styles.input}
            />

            <Text style={styles.txt}>{mensagem}</Text>
            <TextInput 
            value={txt2}
            onChangeText={setTxt2}
            placeholder='digite uma mensagem'
            keyboardType='ascii-capable'
            style={styles.input}
            />

            <TouchableOpacity
            style={styles.botao}
            onPress={() => handleExibeMensagem(txt2)}
            >

            <Text style={styles.txtbotao}>Exibir Texto</Text>
            </TouchableOpacity>



        </View>
    );
}
