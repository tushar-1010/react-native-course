import React from 'react';
import { View, StyleSheet,StatusBar } from 'react-native';

import { CartProvider } from '.././srcs/CartContext';
import MainScreen from '.././srcs/MainScreen';

const CartOptions = () => {
  return (
    <View style={styles.container}>
    <CartProvider>
      <MainScreen />
    </CartProvider>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default CartOptions;
