import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StackNavigation from './src/navigation/StackNavigation'
import store, { persistor } from './src/redux/reduxStore/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { LazyLoader } from './src/components';
import Toast from 'react-native-toast-message';
import { COLORS } from './src/constant/theme';


const App = () => {
  return <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StatusBar backgroundColor={COLORS.primary} />
      <StackNavigation />
      <LazyLoader />
      <Toast />
    </PersistGate>
  </Provider>
}

export default App

const styles = StyleSheet.create({})