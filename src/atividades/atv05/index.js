import React, { useState }  from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';


  export default function Index () {


  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [total, setTotal] = useState(0);

  function Soma () {
    setTotal(parseInt (n1) + parseInt(n2));
  }

    return (
        <View style={styles.container}>
        <Text style={styles.paragraph}>
        Exemplo 5
        </Text>
        </View>
    );
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            setStatusBarBackgroundColor: '#FF80AB',
            paddin: 8,
        },
        paragraph: {
            margin: 6,
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#C51162',
      },
    });


<View style={styles.container}>
            <Text style={styles.paragraph}>Exemplo  5</Text>
            <Text style={styles.txtSaida}> Calculadora Básica </Text>

            <Text styles={styles.textLabel}> 1° número </Text>
            <TextInput styles={styles.txtEntrada}
            onChangeText={ (entrada) => setN1(entrada) }
            value={n1}
            />
            
            <Text style={styles.txtSaida}>+</Text>

            <Text styles={styles.textLabel}> 2° número</Text>
            <TextInput styles={styles.txtEntrada}
            onChangeText={ (entada) => setN2(entrada)}
            value={n2}
            />

            <Text styles={[styles.txtSaida, {margin: 0}]}> = </Text>

            <Text style={styles.textLabel}> Total </Text>
            <TextInput styles={styles.textEntrada}
            editable={false}
            value={total}
            /> 

            <TouchableOpacity styles={styles.button} onPress={() => Soma ()}>
                <Text styles={styles.textButton}> + </Text>
            </TouchableOpacity>
        </View>