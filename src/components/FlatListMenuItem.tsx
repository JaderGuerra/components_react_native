import { Text, View, StyleSheet, Pressable } from "react-native";
import { MenuItems } from "../interface/AppInterface";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { ThemeContext } from "../context/theme/ThemeContext";

interface Props {
  menuItem: MenuItems;
}

export const FlatListMenuItem = ({ menuItem }: Props) => {
  const {
    theme: { colors },
  } = useContext(ThemeContext);

  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate(menuItem.component as never)}>
      <View style={styles.container}>
        <FontAwesome
          name={menuItem.icon as any}
          color={colors.primary}
          size={15}
        />
        <Text style={{ ...styles.itemText, color: colors.text }}>
          {menuItem.name}
        </Text>
        <View style={{ flex: 1 }} />
        <FontAwesome
          style={{ justifyContent: "flex-end" }}
          name="chevron-right"
          size={24}
          color={colors.primary}
        />
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
  },
});
