
import React, { useContext } from 'react';
import { Alert,View, Text, Button, FlatList, StyleSheet, ScrollView ,StatusBar} from 'react-native';
import { CartContext } from './CartContext';
import Card from './Card';

const MainScreen = () => {
  const { state, dispatch } = useContext(CartContext);

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const removeFromCart = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  const Item = { id: 1, name: 'Football' };
  const Item2 = { id: 2, name: 'Gloves' };
  const Item3 = { id: 3, name: 'Jersey' };

  return (
    <View style={{flex:1,width:'100%',backgroundColor:'beige'}}>
    <ScrollView style={{flex:1}}>
    <View style={styles.container}>
      <Text style={{fontWeight:'bold',color:'dodgerblue',fontSize:30,paddingBottom:20}}>Choose Your Product</Text>

        <Card
        title="Nike Football"
        image="https://cdn.magicdecor.in/com/2024/02/05121308/3D-Effect-Football-Wallpaper-M.jpg"
        description="Durable and fit for all grounds.Size:-5."
        price='Rs. 1299'

      />

      <Button title="Add to Cart" onPress={() => addToCart(Item)} />


      <Card
        title="Premium Football Gloves"
        image="https://cdn.nwscdn.com/media/wysiwyg/3kf/high/High_Value_Football_Goalkeeper_Gloves.jpg"
        description="Great Fit and Full grip with this latest micro technology gloves"
        price='Rs. 799'
      />

      <Button title="Add to Cart item 2" onPress={() => addToCart(Item2)}  />

      <Card
        title="Argentina Jersey"
        image="https://www.jiomart.com/images/product/original/rvpwvl1vfo/glory-sports-argentina-football-jersey-home-product-images-rvpwvl1vfo-4-202211191747.jpg?im=Resize=(500,630)"
        description="1st copy of your favourite jersey with our best finish with easy dry material"
        price='Rs. 1599'
      />

      <Button title="Add to Cart item 3" onPress={() => addToCart(Item3)}  />

      <FlatList
        data={state.cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.txt1}>{item.name}</Text>
            <Text style={styles.txt1}>Quantity: {item.quantity}</Text>
            <Button title="Remove" onPress={() => removeFromCart(item)} />
          </View>
        )}
      />
      <Button title="Proceed to payment" onPress={() =>Alert.alert("Thank You!!","Payment Successful")}></Button>

    </View>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    width:'100%',
    backgroundColor:'beige',
    flex: 1,
    paddingTop:10,
    paddingBottom:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt1:{
    fontWeight:'bold',
    color:'white'
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:'gray',
    width: '90%',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});

export default MainScreen;
