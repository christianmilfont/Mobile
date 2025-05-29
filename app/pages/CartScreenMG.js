import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useAppContextMG } from '../providers/AppProviderMG';
import { Ionicons } from '@expo/vector-icons';

export default function CartScreenMG() {
  const { cartMG, setCartMG } = useAppContextMG();

  const aumentarQuantidadeMG = (id) => {
    const atualizado = cartMG.map(item =>
      item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
    );
    setCartMG(atualizado);
  };

  const diminuirQuantidadeMG = (id) => {
    const atualizado = cartMG
      .map(item =>
        item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item
      )
      .filter(item => item.quantidade > 0);
    setCartMG(atualizado);
  };

  if (cartMG.length === 0) {
    return (
      <View style={styles.vazio}>
        <Text style={{ fontSize: 18, color: '#555' }}>Seu carrinho está vazio.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={cartMG}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.desc}>{item.description}</Text>
              <View style={styles.qtdContainer}>
                <TouchableOpacity onPress={() => diminuirQuantidadeMG(item.id)}>
                  <Ionicons name="remove-circle" size={24} color="#d00" />
                </TouchableOpacity>
                <Text style={styles.qtd}>{item.quantidade}</Text>
                <TouchableOpacity onPress={() => aumentarQuantidadeMG(item.id)}>
                  <Ionicons name="add-circle" size={24} color="#0a0" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f2f2f2' },
  vazio: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2,
  },
  image: { width: 60, height: 60, borderRadius: 8 },
  info: { flex: 1, marginLeft: 10 },
  title: { fontSize: 16, fontWeight: 'bold' },
  desc: { fontSize: 14, color: '#555' },
  qtdContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  qtd: { fontSize: 18, fontWeight: 'bold' },
});
