import { createStackNavigator } from "@react-navigation/stack";
import {
  HomeScreen,
  Animation102Screen,
  Animation101Screen,
  TextInputScreen,
  PullToRefresh,
  CustomSectionList,
  ModalScreen,
  InfiniteScrollScreen,
  SlidesScreen,
  ChangeThemeScreen,
} from "../screens";
import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { ThemeContext } from "../context/theme/ThemeContext";
import { View } from "react-native";

const Stack = createStackNavigator();

export const StackNavigator = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Animation101Screen"
            component={Animation101Screen}
          />
          <Stack.Screen
            name="Animation102Screen"
            component={Animation102Screen}
          />
          <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
          <Stack.Screen name="PullToRefresh" component={PullToRefresh} />
          <Stack.Screen
            name="CustomSectionList"
            component={CustomSectionList}
          />
          <Stack.Screen name="ModalScreen" component={ModalScreen} />
          <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
          <Stack.Screen
            name="InfiniteScrollScreen"
            component={InfiniteScrollScreen}
          />
          <Stack.Screen
            name="ChangeThemeScreen"
            component={ChangeThemeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
