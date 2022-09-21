import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
// import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigator from "./src/Navigation/index";

export default function App() {
  return (
    // <SafeAreaProvider>
    <View style={styles.container}>
      <Navigator />
      {/* <CreatePostScreen /> */}
      <StatusBar style="auto" />
    </View>
    // </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 40,
    // backgroundColor: "lightgray",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
