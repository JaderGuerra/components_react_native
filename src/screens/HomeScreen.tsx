import { FlatList, Text, View } from "react-native";
//import Ionicons from "@expo/vector-icons/Ionicons";
import Constants from "expo-constants";
import { styles } from "../theme/appTheme";
import { MenuItems } from "../interface/AppInterface";
import { FlatListMenuItem } from "../components/FlatListMenuItem";

const menuItems: MenuItems[] = [
  {
    name: "Animation 101",
    icon: "star",
    component: "Animation101Screen",
  },
  {
    name: "Animation 102",
    icon: "flag",
    component: "Animation102Screen",
  },
  {
    name: "Text input",
    icon: "file-text",
    component: "TextInputScreen",
  },
  {
    name: "Pull To Refresh",
    icon: "refresh",
    component: "PullToRefresh",
  },
  {
    name: "Section List",
    icon: "list",
    component: "CustomSectionList",
  },
  {
    name: "Modal",
    icon: "image",
    component: "ModalScreen",
  },
  {
    name: "Infinite Scroll",
    icon: "arrow-circle-o-down",
    component: "InfiniteScrollScreen",
  },
  {
    name: "Slides Screen",
    icon: "stack-overflow",
    component: "SlidesScreen",
  },
];

export const HomeScreen = () => {
  const RenderListHeader = () => {
    return (
      <View style={{ marginTop: Constants.statusBarHeight, marginBottom: 20 }}>
        <Text style={styles.title}>Opciones de Menú</Text>
      </View>
    );
  };

  const ItemSeparator = () => {
    return (
      <View style={{ borderBottomWidth: 1, opacity: 0.4, marginVertical: 5 }} />
    );
  };

  return (
    <View style={{ flex: 1, ...styles.globalMargin }}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={() => RenderListHeader()}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
};
