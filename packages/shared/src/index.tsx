import React from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
// import LogoSrc from "./logo.png";yarb

export function App() {
  return (
    <SafeAreaView style={styles.root}>
      {/* <Image style={styles.logo} source={LogoSrc} /> */}
      <Text style={styles.text}>Welcome to React Native!</Text>
      <View style={styles.platformRow}>
        <Text style={styles.text}>Running ons: </Text>
        <View style={styles.platformBackground}>
          <Text style={styles.platformValue}>{Platform.OS}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1F2123",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  text: {
    fontSize: 28,
    fontWeight: "600",
    color: "black",
    // opacity: 0.5,
  },
  platformRow: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  platformValue: {
    fontSize: 28,
    fontWeight: "500",
  },
  platformBackground: {
    backgroundColor: "#ececec",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#d4d4d4",
    paddingHorizontal: 6,
    borderRadius: 6,
    alignItems: "center",
  },
});

export default App;
