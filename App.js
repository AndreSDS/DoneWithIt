import "react-native-gesture-handler";
import * as React from "react";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/pages/HomeScreen";
import { StatusBar } from "react-native";
import DetailScreen from "./src/pages/DetailScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <>
      <StatusBar translucent={true} barStyle="light-content" />
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator>
          <Stack.Screen name="AppFlix" component={HomeScreen} />
          <Stack.Screen
            options={({ route }) => ({ title: route.params.movie.title })}
            name="Details"
            component={DetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
