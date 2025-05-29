import React, { useEffect, useState } from 'react';
import { View, FlatList, TextInput, StyleSheet } from 'react-native';
import ProductCardMG from '../components/ProductCardMG';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppContextMG } from '../providers/AppProviderMG';

export default function HomeScreenMG() {
  const [buscaMG, setBuscaMG] = useState('');
  const [listaFiltradaMG, setListaFiltradaMG] = useState([]);
  const navigation = useNavigation();
  const { productsMG, setProductsMG } = useAppContextMG();

  useEffect(() => {
    const carregarProdutosMG = async () => {
      const data = await AsyncStorage.getItem('productsMG');
      const json = JSON.parse(data) || [];
      setProductsMG(json);
      setListaFiltradaMG(json);
    };
    carregarProdutosMG();
  }, []);

  useEffect(() => {
    const texto = buscaMG.toLowerCase();
    const filtrados = productsMG.filter(p =>
      p.title.toLowerCase().includes(texto) || p.description.toLowerCase().includes(texto)
    );
    setListaFiltradaMG(filtrados);
  }, [buscaMG, productsMG]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Buscar produtos..."
        value={buscaMG}
        onChangeText={setBuscaMG}
        style={styles.input}
      />
      <FlatList
        data={listaFiltradaMG}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ProductCardMG
            produto={item}
            onPress={() => navigation.navigate('Detalhes', { produto: item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#eee' },
  input: { backgroundColor: '#fff', borderRadius: 8, padding: 10, marginBottom: 10 },
});
