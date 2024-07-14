import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import Card from './src/Card'; 

const App = () => {
  return (
    <View style={styles.container}>
      <Card
        title="Lionel Messi"
        image="https://wallpaperbat.com/img/116287-lionel-messi-argentina-captain-wallpaper-hd-desktop-and-mobile.jpg"
        // image="https://i2.wp.com/www.herald.ng/wp-content/uploads/2021/01/Messi-1.jpg?fit=2048%2C1365&ssl=1"
        description="Messi completed football.I have seen the player who will inherit my place in Argentine football and his name is Messi. - Diego Maradona"
        likes={'16.3M'}
        comments={'3.5M'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
    backgroundColor:'#61faff',
  },
});

export default App;
