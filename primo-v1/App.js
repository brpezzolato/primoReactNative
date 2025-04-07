import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { styles } from './style';

export default function App() {
  const [numero, setNumero] = useState('');
  const [mensagem, setMsg] = useState('');

  function verificarPrimo() {
    const numeroVerificar = parseInt(numero);

    if (!isNaN(numeroVerificar) && numeroVerificar > 0 && numeroVerificar != 1) {
      let numeroPrimo = numeroVerificar > 1;
      for (let count = 2; count < numeroVerificar; count++) {
        if (numeroVerificar % count === 0) {
          numeroPrimo = false;
          setMsg(`O número ${numeroVerificar} não é primo `);
          break;
        }
      }
      if (numeroPrimo) {
        setMsg(`O número ${numeroVerificar} é primo `);
      }
      setNumero('');
    } else {
      setNumero('');
      setMsg('');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Veja se o número é primo</Text>

      <TextInput
        style={styles.input1}
        placeholder='Digite um número'
        value={numero}
        onChangeText={(numero) => setNumero(numero)}
      />

      <TouchableOpacity style={styles.btn} onPress={verificarPrimo}>
        <Text style={styles.textBtn}>Verificar</Text>
      </TouchableOpacity>

      <Text style={styles.mensagem}>{mensagem}</Text>
    </View>
  );
}