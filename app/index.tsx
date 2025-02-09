import { Button, StyleSheet, View } from "react-native";
import React from "react";
import { router } from "expo-router";

export default function () {
  return (
    <View style={styles.container}>
      <Button
        title="Choose a Category"
        onPress={() => router.push("/choose-category")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
