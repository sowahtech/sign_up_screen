import React from 'react';
import { StyleSheet, View } from 'react-native';
import SignUp from './SignUp'

export default function App() {
  return (
    <View style={styles.container}>
       <SignUp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60
  }
});
