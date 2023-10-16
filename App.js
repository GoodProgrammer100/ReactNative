import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/Categories";
import CategoryOverviewScreen from "./screens/CategoryOverview";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealDetail from "./screens/MealDetails";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoaded] = useFonts({
    myCursive: require("./assets/VeganStylePersonalUse-5Y58.ttf"),
    myCursive2: require("./assets/prettyBurger.otf"),
  });

  if (!isLoaded) return null;

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            headerTitleAlign: "center",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="CategoriesScreen"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name="CategoryOverviewScreen"
            component={CategoryOverviewScreen}
          />
          <Stack.Screen
            name="MealDetails"
            component={MealDetail}
            options={{
              title: "About the Meal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
