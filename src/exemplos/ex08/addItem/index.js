import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import styles from './styles';

export default function AddItem({ addItems }) {

    const [text, setText] = useState ('');
    
    return(
        <View style={styles.container}>
            <TextInput
            placeholder='Adicionar Item...'
            style={styles.input}
            onChangeText={ txt => setText(txt)}
            value={text}
            />
            <TouchableOpacity styles={styles.button} onPress={() => addItems(text)}>
                <Text styles={styles.buttonText}>
                    <MaterialCommunityIcons
                    name="plus"
                    size={26}
                    color="#fafafa"
                    />
                    Adicionar Item
                </Text>
            </TouchableOpacity>
        </View>
    )
}