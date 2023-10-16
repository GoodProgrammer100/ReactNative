import { View, Text, FlatList, StyleSheet } from "react-native";
import { MEALS, CATEGORIES } from "../constants/dummyData";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

const CategoryOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.catId;

  useLayoutEffect(() => {
    const displayTitle = CATEGORIES.find((cat) => cat.id == catId).title;
    navigation.setOptions({
      title: displayTitle,
    });
  }, [catId, navigation]);

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.includes(catId);
  });

  const pressHandler = (mealId) => {
    navigation.navigate("MealDetails", {
      mealId,
    });
  };

  return (
    <View style={styles.rootScreen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <MealItem
            meal={itemData.item}
            onPress={pressHandler.bind(this, itemData.item.id)}
          />
        )}
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
