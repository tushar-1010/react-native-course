import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const CustomInput = ({ placeholder, inputStyle, containerStyle, backgroundColor }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        style={[styles.input, inputStyle, { backgroundColor: backgroundColor || 'white' }]}
        placeholder={placeholder}
        placeholderTextColor={inputStyle?.color || '#000'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    overflow: 'hidden',
  },
  input: {
    elevation:5,
    height: 40,
    paddingHorizontal: 10,
  },
});

export default CustomInput;
