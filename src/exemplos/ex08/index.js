import { useState } from 'react';
import { View, Text, FlatList, Alert, Platform } from 'react-native';
import styles from './styles';
import uuid from 'react-native-uuid';
import ItemLista from './ItemLista';
import AddItem from './addItem';


export default function Exemplo8() {

    const [items, setItems] = useState([
        { id: uuid.v4(), text: 'Leite Integral'},
        { id: uuid.v4(), text: 'Pão de Forma'},
        { id: uuid.v4(), text: 'Nescau'},
        { id: uuid.v4(), text: 'Manteiga'},

    ]); // [] array ou lista de itens


    function deleteItem(id) {
        setItems(prevItems => {
            return prevItems.filter(item => item.id != id);
        });
    }

    function addItems(item) {
        setItems( prevItems => {
            return [{id: uuid.v4(), text: item}, ...prevItems];
        });
    }

    function addItems(text) {
        if (text === '') {
               Platform === 'web'
               ? alert('O valor do item não pode ser vazio')
               : Alert.alert('Erro', 'O valor do item não pode ser vazio', [{text: "OK"}]); 
        } else {
            
            setItems( prevItems => {
                return [{id: uuid.v4(), text: text}, ...prevItems];
            });
        }
    }
 console.log(Platform.OS);

    return (

        <View style={styles.container}>
        <Text style={styles.titulo}>Exemplo 8</Text>
        <Text style={styles.cabecalho}>Lista de Compras</Text>
        <AddItem addItems={addItems} />
        <FlatList
        data={items}
        renderItem={({item}) =>
             <ItemLista id={item.id} deleteItem={deleteItem}>
                {item.text}
                </ItemLista>}

        style={styles.lista}
        />
    </View>

    );
}