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
  SlidesScreen
} from "../screens";

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
      <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
      <Stack.Screen name="PullToRefresh" component={PullToRefresh} />
      <Stack.Screen name="CustomSectionList" component={CustomSectionList} />
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
      <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
      <Stack.Screen
        name="InfiniteScrollScreen"
        component={InfiniteScrollScreen}
      />
    </Stack.Navigator>
  );
};
