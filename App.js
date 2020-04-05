import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("Saugat Bhattarai");
  const [age, setAge] = useState(30);

  // changeName = () => {
  //   setName("Tilak Basyal");
  //   setPerson({ name: "Tilak basyal", age: 45 });
  // };

  return (
    <View style={styles.container}>
      <View>
        <Text>Enter Your Name</Text>
        <TextInput
          multiline
          style={styles.input}
          placeholder="e.g. Tilak Basyal"
          onChangeText={val => setName(val)}
        />
        <Text>Enter Your Age</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="e.g. 99"
          onChangeText={val => setAge(val)}
        />
        <Text>
          My name is {name} and age is {age}.
        </Text>
      </View>

      {/* <View style={styles.buttonContainer}>
        <Button title="Update State" />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200
  }
});
