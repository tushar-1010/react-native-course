import React from 'react';
import { Text,View, StyleSheet, Alert } from 'react-native';
import Button from '.././reuse/Button'; 
const ReusableButton = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Login Button"
        icon="star"
        onPress={() => console.log("Pressed")}
        buttonStyle={styles.primaryButton}
        cb="flower-outline"
        br={8}
        textStyle={styles.primaryButtonText}
      />
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Button
        title="Like"
        cb="heart"
        br={80}
        buttonStyle={styles.secondaryButton}
        textStyle={styles.secondaryButtonText}
      />
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Button
        title="Button no. 3"
        onPress={() => console.log("Pressed 3")}
        buttonStyle={styles.Button3}
        textStyle={styles.ButtonText3}
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
  },
  primaryButton: {
    backgroundColor: 'red',
    width: 200,
  },
  primaryButtonText: {
    color: 'yellow',
  },
  secondaryButton: {
    backgroundColor: 'blue',
    width: 60
  },
  secondaryButtonText: {
    color: 'white',
  },
  Button3: {
    backgroundColor: 'green',
  },
  ButtonText3: {
    color: 'black',
  },
});

export default ReusableButton;
