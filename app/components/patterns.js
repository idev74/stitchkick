import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const Patterns = () => {
  const patternsData = [
    { id: 1, title: 'Garter Stitch', description: 'Knit every row.' },
    { id: 2, title: 'Stockinette Stitch', description: 'Knit one row, purl one row.' },
    { id: 3, title: 'Ribbing', description: 'K2, P2 repeat.' },
    { id: 4, title: 'Seed Stitch', description: 'Row 1: K1, P1. Row 2: P1, K1.' },
    { id: 5, title: 'Cable Stitch', description: 'Cross stitches to create cables.' },
    { id: 6, title: 'Lace Stitch', description: 'Yarn over, knit 2 together.' },
];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={patternsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
  },
});

export default Patterns;
