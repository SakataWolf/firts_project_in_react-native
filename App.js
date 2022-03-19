import React,{useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
export default function App() {
  const [valor1, setValor1] = useState();
  const [valor2, setValor2] = useState();
  const [resultado, setResultado] = useState();
  function somar(){
    setResultado(parseFloat(valor1) + parseFloat(valor2));
  }
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        Olá Mundo
      </Text>
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}> Valor 1 </Text>
        <TextInput 
          style={styles.input} 
          value={valor1}
          onChangeText={(texto)=>setValor1(texto)}
        />
      </View>
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}> Valor 2 </Text>
        <TextInput 
          style={styles.input} 
          value={valor2}
          onChangeText={(texto)=>setValor2(texto)}
        />
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity style={styles.botao} onPress={somar}>
            <Text style={styles.textBotao}>Somar</Text>
        </TouchableOpacity>
      </View>
      
      <view style={styles.Bloco}>
            <text style={styles.Texto}>Resultado: {resultado}</text>
      </view>
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#449',
    alignItems:'center',
    justifyContent:'center'
  },
  texto:{
    fontSize:30,
    color:'#00F'
  },
  input:{
    borderWidth:2,
    borderColor:'#000',
    width:'80%'
  },
  bloco:{
    width:'100%',
    alignItems:'center',
    marginTop:20
  },
  textoBloco:{
    fontSize:20
  },
  botao:{
    backgroundColor:'#000',
    width:'80%',
    alignItems:'center'
  },
  textBotao:{
    fontSize:20,
    color:'#FFF'
  }
});
