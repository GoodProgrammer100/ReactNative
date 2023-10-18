import { View, Text, FlatList, StyleSheet } from "react-native";
import { MEALS } from "../constants/dummyData";
import MealItem from "../components/MealItem";
import { useContext } from "react";
import { FavouriteContext } from "../store/context/favourites-context";
import { useSelector } from "react-redux";

const FavouritesScreen = () => {
  const favouriteMeals = useSelector((state) => state.favouriteMeals);
  const displayMeals = MEALS.filter((meal) =>
    favouriteMeals.ids.includes(meal.id)
  );

  if (favouriteMeals.ids.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.infoText}>You have no Favourite Meals yet</Text>
      </View>
    );
  }

  return (
    <View style={{ paddingHorizontal: 20 }}>
      <FlatList
        data={displayMeals}
        renderItem={(itemData) => <MealItem meal={itemData.item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  infoText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});
