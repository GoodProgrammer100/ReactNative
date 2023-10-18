import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/Categories";
import CategoryOverviewScreen from "./screens/CategoryOverview";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealDetail from "./screens/MealDetails";
import { useFonts } from "expo-font";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavouritesScreen from "./screens/FavouritesScreen";
import { Ionicons } from "@expo/vector-icons";
import FavouriteContextProvider from "./store/context/favourites-context";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerScreen = () => (
  <Drawer.Navigator
    initialRouteName="DCategoriesScreen"
    screenOptions={{
      headerStyle: { backgroundColor: "#351401" },
      headerTintColor: "white",
      headerTitleAlign: "center",
      sceneContainerStyle: { backgroundColor: "#3f2f25" },
      drawerContentStyle: { backgroundColor: "#351401", paddingTop: 16 },
      drawerInactiveTintColor: "white",
      drawerActiveBackgroundColor: "#e4baa1",
      drawerActiveTintColor: "#351401",
    }}
  >
    <Drawer.Screen
      name="DCategoriesScreen"
      component={CategoriesScreen}
      options={{
        title: "All Categories",
        drawerIcon: ({ size, color }) => (
          <Ionicons name="list" size={size} color={color} />
        ),
      }}
    />
    <Drawer.Screen
      name="FavouritesScreen"
      component={FavouritesScreen}
      options={{
        title: "Favourite Meals",
        drawerIcon: ({ color, size }) => (
          <Ionicons name="heart" color={color} size={size} />
        ),
      }}
    />
  </Drawer.Navigator>
);
export default function App() {
  const [isLoaded] = useFonts({
    myCursive: require("./assets/VeganStylePersonalUse-5Y58.ttf"),
    myCursive2: require("./assets/prettyBurger.otf"),
  });

  if (!isLoaded) return null;

  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
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
              component={DrawerScreen}
              options={{
                title: "All Categories",
                headerShown: false,
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
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
