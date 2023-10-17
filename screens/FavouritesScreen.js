import { View, Text, FlatList } from "react-native";
import { MEALS } from "../constants/dummyData";
import MealItem from "../components/MealItem";
import { useContext } from "react";
import { FavouriteContext } from "../store/context/favourites-context";

const FavouritesScreen = () => {
  const favouriteCtx = useContext(FavouriteContext);
  const displayMeals = MEALS.filter((meal) =>
    favouriteCtx.ids.includes(meal.id)
  );

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
