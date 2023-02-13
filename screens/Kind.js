import { StyleSheet, Text, View, Button } from "react-native";

function Kind({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title="go to Category" onPress={() => navigation.navigate("Category")} />
    </View>
  );
}

export default Kind;
