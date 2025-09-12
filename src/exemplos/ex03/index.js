import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Exemplo3() {

    const [numero, setNumero] = useState(0);

    function handleIncrementar() {
        setNumero(numero + 1);
    }

    function handleDecrementar() {
        setNumero(numero - 1);
    }

    function handleZerar() {
        setNumero(0);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 1</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                
                <TouchableOpacity style={styles.Esquerda} onPress={handleDecrementar}>
                    <Text style={styles.texto}>-</Text>
                </TouchableOpacity>

                <View style={{ marginHorizontal: 20 }}>
                    <Text style={styles.textonumero}>{numero}</Text>
                </View>


                <TouchableOpacity style={styles.Direita} onPress={handleIncrementar}>
                    <Text style={styles.texto}>+</Text>
                </TouchableOpacity>

            </View>

            <TouchableOpacity style={styles.Embaixo} onPress={handleZerar}>
                <Text style={styles.texto}>Limpar</Text>
            </TouchableOpacity>
        </View>
    );
}
