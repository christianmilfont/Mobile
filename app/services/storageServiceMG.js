import AsyncStorage from '@react-native-async-storage/async-storage';
import productsJson from '../data/productsMG.json';

export const salvarProdutosMG = async () => {
  try {
    const jsonValue = JSON.stringify(productsJson);
    await AsyncStorage.setItem('productsMG', jsonValue);
  } catch (e) {
    console.error('Erro ao salvar produtos:', e);
  }
};
