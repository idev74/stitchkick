import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {
  incrementStitchCount,
  decrementStitchCount,
  setRowChange,
  setRowNumber,
} from '../store/counterSlice';

export default function ClickCounter() {
  const stitchCount = useSelector((state) => state.counter.stitchCount);
  const rowChange = useSelector((state) => state.counter.rowChange);
  const dispatch = useDispatch();
  const [countInput, setCountInput] = useState('');
  const [currentRow, setCurrentRow] = useState(1);

  const handleIncrement = () => {
    dispatch(incrementStitchCount());
    const stitchCountInt = parseInt(stitchCount);
    const countInputInt = parseInt(countInput);
    if ((stitchCountInt + 1) % countInputInt === 0) {
      setCurrentRow(currentRow + 1);
    }
  };

  const handleDecrement = () => {
    const stitchCountInt = parseInt(stitchCount);
    const countInputInt = parseInt(countInput);
    if (stitchCountInt > 0) {
      dispatch(decrementStitchCount());
      if (stitchCountInt % countInputInt === 1 && stitchCountInt > 1) {
        setCurrentRow(currentRow - 1);
      }
    }
  };

  const handleRowChange = () => {
    dispatch(setRowChange(!rowChange));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Click Counter</Text>
      <Text style={styles.countLabel}>Stitch Count: {stitchCount}</Text>
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={handleIncrement} />
        <Button title="-" onPress={handleDecrement} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter Stitch Count"
        value={countInput}
        onChangeText={(text) => setCountInput(text)}
        keyboardType="numeric"
      />
      <Button title="Set Row Change" onPress={handleRowChange} />
      <Text style={styles.currentRowLabel}>Current Row: {currentRow}</Text>
      <Text style={styles.rowChangeLabel}>
        {rowChange ? 'Row Change: Yes' : 'Row Change: No'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  countLabel: {
    fontSize: 18,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    width: '80%',
    borderRadius: 5,
  },
  currentRowLabel: {
    fontSize: 16,
    marginBottom: 10,
  },
  rowChangeLabel: {
    fontSize: 16,
  },
});

