import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "Saugat", key: "1" },
    { name: "Tilak", key: "2" },
    { name: "Sarin", key: "3" },
    { name: "Manisha", key: "4" },
    { name: "Ayush", key: "5" },
    { name: "Kamal", key: "6" },
    { name: "Ravi", key: "7" },
    { name: "Bharat", key: "8" },
    { name: "Saggi", key: "9" }
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map(item => (
          <Text style={styles.item} key={item.key}>
            My name is {item.name}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20
    // justifyContent: "center"
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24
  }
});
