import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { styles } from './style';

export default function App() {
  const [numero, setNumero] = useState('');
  const [mensagem, setMsg] = useState('');

  // Função de verificar se eh primo
  function ePrimos(numero) {
    for (let count = 2; count < numero; count++)
      if (numero % count === 0) {
        return false;
      }
    return true;
  }

  // Função de listar os primos
  function listaPrimo() {
    const qtd = parseInt(numero);
    let primos = [];

    if (!isNaN(qtd) && qtd > 0) {
      for (let numPrimos = 2, count = 0; count < qtd; numPrimos++) {
        if (ePrimos(numPrimos)) {
          primos.push(numPrimos);
          count++;
        }
      }

      setNumero('');
      setMsg(`Os ${qtd}º primeiros primos: ${primos.join(', ')}`);

    } else {
      setNumero('');
      setMsg('');
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.text}>Gerador de Primos</Text>
      <Text style={styles.subText}>Atividade primo versão 4</Text>

      <TextInput
        style={styles.input1}
        placeholder='Digite um número'
        value={numero}
        onChangeText={(numero) => setNumero(numero)}
      />

      <TouchableOpacity style={styles.btn} onPress={listaPrimo}>
        <Text style={styles.textBtn}>Verificar</Text>
      </TouchableOpacity>

      {mensagem.length > 0 && (
        <Text style={styles.mensagem}>{mensagem}</Text>
      )}
    </View>
  );
}