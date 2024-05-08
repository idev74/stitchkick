import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Image 
        style={styles.image}
        source={require('../assets/images/Stitch-removebg-preview.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FCEFEF',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: 'Arial',
    color: '#FF8888',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#FF8888',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Home;
