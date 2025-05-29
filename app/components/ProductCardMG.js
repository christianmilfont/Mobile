import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function ProductCardMG({ produto, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: produto.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{produto.title}</Text>
        <Text style={styles.desc}>{produto.description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', padding: 10, marginBottom: 10, backgroundColor: '#fff', borderRadius: 10, elevation: 2,
  },
  image: { width: 60, height: 60, borderRadius: 8 },
  info: { marginLeft: 10, flex: 1 },
  title: { fontWeight: 'bold', fontSize: 16 },
  desc: { color: '#555' },
});
