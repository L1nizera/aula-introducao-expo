import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import Constants from 'expo-constants';

import Atividade4 from './src/atividades/atv04';
import { RFPercentage } from 'react-native-responsive-fontsize';


export default function App() {
  return (
    <View style={styles.container}>
       <Atividade4/>
      <StatusBar style="light"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    //alignItems: 'center',
    //justifyContent: 'center',
    padding: RFPercentage (2.5),
    paddingTop: Constants.StatusBarHeight,
  },
});
