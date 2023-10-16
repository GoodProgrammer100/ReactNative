import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Platform,
} from "react-native";

const MealItem = ({ meal, onPress }) => {
  return (
    <View style={styles.itemContainer}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <Image style={styles.imageStyle} source={{ uri: meal.imageUrl }} />
        <View>
          <Text style={styles.title}>{meal.title}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoItem}>{meal.duration}</Text>
          <Text style={styles.infoItem}>{meal.complexity}</Text>
          <Text style={styles.infoItem}>{meal.affordability}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  itemContainer: {
    height: 320,
    marginHorizontal: 8,
    marginVertical: 12,
    backgroundColor: "white",
    borderRadius: 20,
    overflow: "hidden",
    elevation: 5,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    // opacity: Platform.OS === "ios" ? 0.5 : 1,
    opacity: 0.75,
  },
  imageStyle: {
    flex: 1,
    resizeMode: "cover",
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
    fontSize: 18,
    fontFamily: "myCursive",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 8,
  },
  infoItem: {
    marginHorizontal: 6,
  },
});
