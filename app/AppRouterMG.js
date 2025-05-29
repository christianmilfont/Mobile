import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetailsMG from './pages/ProductDetailsMG';
const Stack = createNativeStackNavigator();

export default function AppRouterMG() {
  const { cartMG } = useAppContextMG();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Tabs" options={{ headerShown: false }}>
        {() => (
          <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Produtos" component={HomeScreenMG} />
            <Tab.Screen name={`Carrinho (${cartMG.length})`} component={CartScreenMG} />
          </Tab.Navigator>
        )}
      </Stack.Screen>
      <Stack.Screen name="Detalhes" component={ProductDetailsMG} />
    </Stack.Navigator>
  );
}
