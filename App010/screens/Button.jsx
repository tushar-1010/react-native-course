import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const Button = ({ onPress, title, buttonStyle, textStyle, icontype, borderradius }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#dddddd' : buttonStyle.backgroundColor, borderRadius: borderradius,
        },
        styles.button,
        buttonStyle,
      ]}
    >
      {icontype && <Icon name={icontype} size={20} color="#555" />}
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;
