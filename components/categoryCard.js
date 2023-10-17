import { View, Text, StyleSheet, Pressable } from "react-native";

const CategoryCard = ({ children, bgColor, onPress }) => {
  return (
    <View style={[styles.cardContainer, { backgroundColor: bgColor }]}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#cccccc" }}
        onPress={onPress.bind(this, children.id)}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.cardText}>{children.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: 150,
    height: 160,
    margin: 12,
    borderRadius: 20,
    elevation: 8,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    overflow: "hidden",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  cardText: {
    fontSize: 18,
    fontFamily: "myCursive",
  },
});
