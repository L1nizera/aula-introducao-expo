import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function ItemLista({children, id, deleteItem}) {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.txtItem}>{children}</Text>
            <MaterialIcons 
            name="delete-outline"
            size={26}
            color="#FF1493"
            onPress={() => deleteItem(id)}
            />
        </TouchableOpacity>
    )
}