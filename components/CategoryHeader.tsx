import { ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { useTheme } from "@react-navigation/native";
import { Button } from "./Button";

const category = [
  { id: "technology", name: "Technology" },
  { id: "business", name: "Business" },
  { id: "health", name: "Health" },
  { id: "education", name: "Education" },
  { id: "travel", name: "Travel" },
  { id: "finance", name: "Finance" },
  { id: "sports", name: "Sports" },
  { id: "entertainment", name: "Entertainment" },
  { id: "science", name: "Science" },
  { id: "fashion", name: "Fashion" },
];

export const CategoryHeader = () => {
  const theme = useTheme();
  const [activeButton, setActiveButton] = useState("all");
  return (
    <View
      style={[
        styles.headerContainer,
        {
          borderTopColor: theme.colors.border,
          borderBottomColor: theme.colors.border,
        },
      ]}
    >
      <View
        style={[styles.rightBorder, { borderRightColor: theme.colors.border }]}
      >
        <Button
          title={"All"}
          active={activeButton === "all"}
          onPress={() => setActiveButton("all")}
        />
      </View>
      <View style={styles.categoryContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          fadingEdgeLength={150}
          contentContainerStyle={styles.scrollViewContent}
        >
          {category.map((item) => (
            <Button
              key={item.id}
              title={item.name}
              active={activeButton === item.id}
              onPress={() => setActiveButton(item.id)}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    flexDirection: "row",
    paddingLeft: 10,
  },
  categoryContainer: {
    flex: 1,
  },
  scrollViewContent: {
    paddingRight: 10,
    gap: 8,
    paddingLeft: 5,
    paddingVertical: 10,
  },
  rightBorder: {
    marginVertical: 10,
    borderRightWidth: 0.5,
    paddingRight: 5,
  },
});
