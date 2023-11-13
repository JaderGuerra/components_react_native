import { StyleSheet, Text, View } from "react-native";
import Constant from "expo-constants";
import { styles } from "../theme/appTheme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useContext } from "react";
import { ThemeContext } from "../context/theme/ThemeContext";

export const ChangeThemeScreen = () => {
  const {
    setDarkTheme,
    setLigTheme,
    theme: { colors },
  } = useContext(ThemeContext);
  return (
    <View
      style={{ ...styles.globalMargin, marginTop: Constant.statusBarHeight }}
    >
      <Text style={{ ...styles.title, color: colors.text }}>Theme</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{
            ...localStyles.btn,
            backgroundColor: colors.background,
            borderColor: colors.border,
            borderWidth:1
          }}
          onPress={setLigTheme}
        >
          <Text style={{ ...localStyles.txt, color: colors.text }}>Light </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...localStyles.btn,
            backgroundColor: colors.background,
            borderColor: colors.border,
            borderWidth:1
          }}
          onPress={setDarkTheme}
        >
          <Text style={{ ...localStyles.txt, color: colors.text }}>Dark</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const localStyles = StyleSheet.create({
  btn: {
    width: 150,
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
  },
  txt: {
    fontSize: 22,
    textAlign: "center",
    color: "white",
  },
});
