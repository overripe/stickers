import { StyleSheet, Text, View, Button } from "react-native";

function Main({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title="go to Kind" onPress={() => navigation.navigate("Kind")} />
    </View>
  );
}

export default Main;
