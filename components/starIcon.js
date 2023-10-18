import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import { FavouriteContext } from "../store/context/favourites-context";
import { useSelector } from "react-redux";

const StarIcon = ({ onPress, name, id }) => {
  const isFav = useSelector((state) => state.favouriteMeals.ids).includes(id);
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [pressed ? styles.iconPressed : null]}
    >
      <Ionicons
        name={isFav ? "star" : "star-outline"}
        size={24}
        color={"white"}
      />
    </Pressable>
  );
};

export default StarIcon;
const styles = StyleSheet.create({
  iconPressed: {
    opacity: 0.5,
  },
});
