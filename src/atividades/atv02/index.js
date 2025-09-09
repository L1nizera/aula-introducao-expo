import { View, Text, Image } from 'react-native'; 

import styles from './styles';
import img from  'D:/TEMP/Rhyan_Augusto/aula-introducao-expo/assets/camiseta.jpg';
import img1 from 'D:/TEMP/Rhyan_Augusto/aula-introducao-expo/assets/camiseta.jpg';
import img2 from 'D:/TEMP/Rhyan_Augusto/aula-introducao-expo/assets/camiseta.jpg';
import img3 from 'D:/TEMP/Rhyan_Augusto/aula-introducao-expo/assets/camiseta.jpg';

import Card from 'D:/TEMP/Rhyan_Augusto/aula-introducao-expo/src/atividades/atv02/card';


import Mensagem from './mensagem';
function Exemplo03() {
    return(
<View style={styles.container}>
            <Text style={styles.titulo}>Loja Oficial do São Paulo</Text>
            
            <Card
                imagem={img1}
                nome={'Camisa do São Paulo Branca'}
                descricao={'Camisa 1 do São Paulo'}
                valor={'R$450,00'}> 
            </Card>

            <Card
                imagem={img}
                nome={'Camisa do São Paulo Preta'}
                descricao={'Camisa 2 do São Paulo'}
                valor={'R$350,00'}> 
            </Card>

             <Card
                imagem={img2}
                nome={'Camisa do São Paulo Listrada'}
                descricao={'Camisa 3 do São Paulo'}
                valor={'R$320,00'}> 
            </Card>

             <Card
                imagem={img3}
                nome={'Camisa do São Paulo Mandrake'}
                descricao={'Camisa Mandrake Torcedor do São Paulo'}
                valor={'R$700,00'}> 
            </Card>
        </View>
    );
}


export default Exemplo03;