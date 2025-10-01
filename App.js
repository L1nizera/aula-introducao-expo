import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
    
import Index from 'D:/TEMP/Rhyan_Augusto/aula-introducao-expo/src/exemplos/ex05';
import Exemplo05 from 'D:/TEMP/Rhyan_Augusto/aula-introducao-expo/src/exemplos/ex05';
import Atividade05 from 'D:/TEMP/Rhyan_Augusto/aula-introducao-expo/src/atividades/atv05';

export default function App() {

return (
  <View style={styles.container}>
    <Atividade05 />
  </View>
);
}
const styles = StyleSheet.create ({
  container: {
    flex:1 ,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#b700ffff',
    padding: 8,
 },
 });