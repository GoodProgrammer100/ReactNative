import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const StarIcon = ({ onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [pressed ? iconPressed : null]}
    >
      <Ionicons name="star-outline" size={24} color={"white"} />
    </Pressable>
  );
};

export default StarIcon;
const styles = StyleSheet.create({
  iconPressed: {
    opacity: 0.5,
  },
});
