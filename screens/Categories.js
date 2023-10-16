import { View, Text, FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../constants/dummyData";
import CategoryCard from "../components/categoryCard";

const CategoriesScreen = ({ navigation }) => {
  const pressHandler = (categoryId) => {
    navigation.navigate("CategoryOverviewScreen", {
      catId: categoryId,
    });
  };

  return (
    <View style={styles.rootScreen}>
      <View style={styles.listContainer}>
        <FlatList
          data={CATEGORIES}
          renderItem={({ item }) => (
            <CategoryCard bgColor={item.color} onPress={pressHandler}>
              {item}
            </CategoryCard>
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
});
