import * as React from 'react';
import { StyleSheet, View} from 'react-native';
import Constants from 'expo-constants';

import Index from 'D:/TEMP/Rhyan_Augusto/aula-introducao-expo/src/atividades/atv05';

export default function App() {

    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [total, setTotal] = useState(0);

return (
  <View style={styles.container}>
    <Index />
  </View>
);
}
const styles = StyleSheet.create ({
  container: {
    flex:1 ,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#C51162',
    padding: 8,
 },
 });