import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppRouterMG from './AppRouterMG';
import { AppProviderMG } from '../app/providers/AppProviderMG';
import { salvarProdutosMG } from '../app/services/storageServiceMG';


export default function App() {
useEffect(() => {
    salvarProdutosMG(); // salva uma vez os dados
    }, 
  []
);
  return (
    <AppProviderMG>
      <NavigationContainer>
        <AppRouterMG />
      </NavigationContainer>
    </AppProviderMG>
  );
}
