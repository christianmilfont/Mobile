//Estado Global com Context

import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppContextMG = createContext();

export const AppProviderMG = ({ children }) => {
  const [productsMG, setProductsMG] = useState([]);
  const [cartMG, setCartMG] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const json = await AsyncStorage.getItem('productsMG');
      if (json) setProductsMG(JSON.parse(json));
    };
    loadData();
  }, []);

  return (
    <AppContextMG.Provider value={{
      productsMG, setProductsMG,
      cartMG, setCartMG
    }}>
      {children}
    </AppContextMG.Provider>
  );
};

export const useAppContextMG = () => useContext(AppContextMG);
