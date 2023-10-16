import { View, Text, FlatList, StyleSheet } from "react-native";
import { MEALS } from "../constants/dummyData";
import MealItem from "../components/MealItem";

const CategoryOverviewScreen = ({ route }) => {
  const catId = route.params.catId;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.includes(catId);
  });
  return (
    <View style={styles.rootScreen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => <MealItem meal={itemData.item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CategoryOverviewScreen;

const styles = StyleSheet.create({
  rootScreen: {
    paddingHorizontal: 20,
  },
});
