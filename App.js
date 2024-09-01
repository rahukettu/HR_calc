import { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [lower, setLower] = useState('');
  const [upper, setUpper] = useState('');

  const calculate = () => {
    const ageNumber = Number(age);
    if (!isNaN(ageNumber) && ageNumber > 0) {
      const lowerLimit = Math.round((220 - ageNumber) * 0.65); // Rounded to nearest integer
      const upperLimit = Math.round((220 - ageNumber) * 0.85); // Rounded to nearest integer
      setLower(lowerLimit);
      setUpper(upperLimit);
    } else {
      alert('Please enter a valid age');
    }
  };

  const handleAgeChange = (text) => {
    setAge(text);
    setLower(''); //Reset
    setUpper(''); //Reset
  };

  return (
    <View style={styles.container}>
    <Text style={styles.heading}>Calculate your heart rate limits</Text>
      <Text style={styles.label}>Age</Text>
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={handleAgeChange}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Limits</Text>
      <Text style={styles.result}>{lower} - {upper}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Calculate" onPress={calculate} />
      </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    textAlign: 'center',
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
    marginTop: 10,
    marginBottom: 10,
  }
});