import React from "react";
import { StyleSheet, Text, View } from "react-native";

class App extends React.Component {
  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.basicView}>
          <Text style={styles.basicText}>Labas, Rasa!!!</Text>
        </View>
        <View style={styles.basicView}>
          <Text style={styles.basicText}>Labas, Linai</Text>
        </View>
        <View style={styles.basicView}>
          <Text style={styles.basicText}>Labas, Mantai</Text>
        </View>
        <View style={styles.basicView}>
          <Text style={styles.basicText}>Labas, Igniuk!!!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ddd",
    width: "100%"
  },
  basicView: {
    backgroundColor: "#bb1"
  },
  basicText: {
    color: "blue",
    fontSize: 20,
    padding: 20
  }
});

export default App;
