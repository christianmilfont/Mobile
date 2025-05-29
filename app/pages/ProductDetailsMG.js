import React from 'react';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';
import { useAppContextMG } from '../providers/AppProviderMG';
import {
    adicionarProdutoMG,
    removerProdutoMG,
} from '../stores/CartStoreMG';

export default function ProductDetailsMG({ route, navigation }) {
  const { produto } = route.params;
  const { cartMG, setCartMG } = useAppContextMG();

  const adicionarAoCarrinhoMG = () => {
    const novoCarrinho = adicionarProdutoMG(cartMG, produto);
    setCartMG(novoCarrinho);
    Alert.alert('Sucesso', 'Produto adicionado ao carrinho!');
  };

  const removerDoCarrinhoMG = () => {
    const novoCarrinho = removerProdutoMG(cartMG, produto.id);
    setCartMG(novoCarrinho);
    Alert.alert('Removido', 'Produto removido do carrinho!');
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: produto.image }} style={styles.image} />
      <Text style={styles.title}>{produto.title}</Text>
      <Text style={styles.desc}>{produto.description}</Text>
      <View style={styles.botoes}>
        <Button title="Adicionar ao Carrinho" onPress={adicionarAoCarrinhoMG} />
        <View style={{ height: 10 }} />
        <Button title="Remover do Carrinho" color="#cc0000" onPress={removerDoCarrinhoMG} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  image: { width: '100%', height: 250, marginBottom: 20, borderRadius: 10 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  desc: { fontSize: 16, color: '#555', marginBottom: 20 },
  botoes: { marginTop: 20 },
});
