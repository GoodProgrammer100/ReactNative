import { View, Text, StyleSheet } from "react-native";

const Ingredients = ({ children }) => {
  return (
    <View style={style.textContainer}>
      <Text style={style.text}>{children}</Text>
    </View>
  );
};

export default Ingredients;

const style = StyleSheet.create({
  textContainer: {
    width: 280,
    padding: 5,
    marginBottom: 6,
    backgroundColor: "#e2b497",
    borderRadius: 5,
  },
  text: {
    textAlign: "center",
    fontSize: 14,
    color: "#351401",
  },
});
