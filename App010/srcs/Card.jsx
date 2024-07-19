import React from 'react';
import {Alert, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Card = ({ title, image, description, likes, comments,price }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>


        <View style={styles.cardFooter}>
        <Text style={{fontWeight:'bold', fontSize:18}}>{price}</Text>
          {/* <View style={styles.cardStats}>
            <Icon name="heart-outline" size={20} color="#f00" />
            <Text style={styles.cardStatsText}>{likes}</Text>
            <Icon name="chatbubble-outline" size={20} color="#555" />
            <Text style={styles.cardStatsText}>{comments}</Text>
          </View> */}
          {/* <Text style={{fontWeight:'bold'}}>Rs. 1299</Text> */}
          <TouchableOpacity style={styles.likeButton } onPress={() =>  Alert.alert("Thank You!!","Item has been added to Wishlist")
}>
            <Icon name="heart" size={20} color="#fff" />
            <Text style={styles.likeButtonText}>Wishlist</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    width: 250,
    elevation: 6, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.25, 
    shadowRadius: 3.84, 
    marginBottom:10,
    marginTop:20
  },
  cardImage: {
    width: '100%',
    height: 170,
  },
  cardContent: {
    padding: 15,
  },
  cardTitle: {
    color:'#61c0ff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 14,
    color: '#333',
    marginBottom: 15,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  cardStatsText: {
    marginLeft: 5,
    marginRight: 15,
    fontSize: 14,
    color: '#555',
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f00',
    padding: 10,
    borderRadius: 20,
  },
  likeButtonText: {
    marginLeft: 5,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Card;
