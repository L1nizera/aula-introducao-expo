import { useState } from 'react';

import { View, Text, Button, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Exemplo3() {

    const [numero, setNumero] = useState(0);

    console.log(numero);
    function handleIncrementar() {
        setNumero(numero+ 1);
    }


    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 1</Text>
            <Button
                onPress={() => { alert('Alguém tocou no botão!') }}
                title="Alert"
                color="#777"
                accessibilityLabel="Botão de alerta"

            />
            <Text style={styles.Text}>{numero}</Text>   

            <TouchableOpacity   

                style={styles.botao}
                onPress={() => handleIncrementar()}

            >
                <Text style={styles.txtbotao}>Incrementar número</Text>
            </TouchableOpacity>
        </View>

    );
}