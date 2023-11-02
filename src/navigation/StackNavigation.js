import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screens } from '../screens';
import { useDispatch, useSelector } from 'react-redux';
import { hide } from '../redux/reducers/spinner';

const { Cart, Product, ProductDetail, Home, ProductFashion, ProductStandard } = Screens.auth
const Stack = createNativeStackNavigator();

function StackNavigation() {
  const dispatch = useDispatch()
  const spinner = useSelector(x => x.spinner)

  useEffect(() => {
    if (spinner['visible']) {
      dispatch(hide())
    }
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{headerShown: false}}
      initialRouteName={"Cart"}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="ProductFashion" component={ProductFashion} />
        <Stack.Screen name="ProductStandard" component={ProductStandard} />
        
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;