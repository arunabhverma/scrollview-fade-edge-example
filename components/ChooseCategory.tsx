import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { CategoryHeader } from "./CategoryHeader";
import { useTheme } from "@react-navigation/native";

export const ChooseCategory = () => {
  const theme = useTheme();
  return (
    <View style={{ flex: 1 }}>
      <CategoryHeader />
      <View style={styles.emptyContainer}>
        <Text style={[styles.emptyText, { color: theme.colors.text }]}>
          Oops!!
        </Text>
        <View
          style={[
            styles.emojiContainer,
            { backgroundColor: theme.colors.card },
          ]}
        >
          <Text style={styles.emojiText}>😊</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginTop: -150,
  },
  emptyText: {
    fontSize: 26,
  },
  emojiContainer: {
    borderRadius: 100,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emojiText: {
    fontSize: 100,
    padding: 20,
    textAlign: "center",
    lineHeight: 125,
  },
});
