import { useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { MEALS } from "../constants/dummyData";
import Ingredients from "../components/Ingredients";
import StarIcon from "../components/starIcon";
import { useContext } from "react";
import { FavouriteContext } from "../store/context/favourites-context";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../store/redux/favouriteMeals";

const MealDetail = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const favouriteMeals = useSelector((state) => state.favourites);
  const mealId = route.params.mealId;
  const myMeal = MEALS.find((meal) => meal.id == mealId);

  let isMealFav = favouriteMeals.ids.includes(mealId);

  const iconPressHandler = () => {
    if (!isMealFav) dispatch(addFavourite(mealId));
    else dispatch(removeFavourite(mealId));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <StarIcon
          onPress={iconPressHandler}
          name={isMealFav ? "star" : "star-outline"}
          id={id}
        />
      ),
    });
  }, []);

  return (
    <ScrollView style={styles.rootScreen}>
      <View>
        <Image style={styles.imageStyle} source={{ uri: myMeal.imageUrl }} />
      </View>
      <View>
        <Text style={styles.title}>{myMeal.title}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.infoItems}>{myMeal.duration}m</Text>
          <Text style={styles.infoItems}>{myMeal.complexity}</Text>
          <Text style={styles.infoItems}>{myMeal.affordability}</Text>
        </View>
      </View>
      <View style={styles.lowerContainer}>
        <View>
          <Text style={styles.topic}>Ingredients</Text>
          <View style={styles.ingContainer}>
            {myMeal.ingredients.map((ing) => (
              <Ingredients key={Math.random().toString()}>{ing}</Ingredients>
            ))}
          </View>
        </View>
        <View>
          <Text style={styles.topic}>Steps</Text>
          <View style={styles.ingContainer}>
            {myMeal.steps.map((step) => (
              <Ingredients key={Math.random().toString()}>{step}</Ingredients>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetail;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  imageStyle: {
    flex: 1,
    width: "100%",
    height: 320,
    resizeMode: "cover",
    marginBottom: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    color: "white",
    margin: 8,
    fontFamily: "myCursive",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  infoItems: {
    marginHorizontal: 4,
    color: "white",
  },
  lowerContainer: {
    marginTop: 16,
    alignItems: "center",
  },
  topic: {
    fontFamily: "myCursive",
    fontSize: 18,
    textAlign: "center",
    color: "#e2b497",
    padding: 5,
    width: 280,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    marginBottom: 8,
  },
  ingContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
});
