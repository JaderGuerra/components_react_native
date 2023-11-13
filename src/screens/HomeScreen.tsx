import { FlatList, Text, View } from "react-native";
import Constants from "expo-constants";
import { styles } from "../theme/appTheme";
import { FlatListMenuItem } from "../components/FlatListMenuItem";
import { menuItems } from "../data/menuItems";
import { useContext } from "react";
import { ThemeContext } from "../context/theme/ThemeContext";

export const HomeScreen = () => {
  const {
    theme: { dividerColor, colors },
  } = useContext(ThemeContext);
  const RenderListHeader = () => {
    return (
      <View
        style={{
          marginTop: Constants.statusBarHeight,
          marginBottom: 20,
          backgroundColor: colors.background,
        }}
      >
        <Text style={{ ...styles.title, color: colors.text }}>
          Opciones de Menú
        </Text>
      </View>
    );
  };

  const ItemSeparator = () => {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          marginVertical: 5,
          borderBottomColor: dividerColor,
        }}
      />
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
