import { Button, Modal, Text, View } from "react-native";
import { styles } from "../theme/appTheme";
import Constants from "expo-constants";
import { useState } from "react";

export const ModalScreen = () => {
  const [isVisible, setisVisible] = useState(false);

  return (
    <View
      style={{ ...styles.globalMargin, marginTop: Constants.statusBarHeight }}
    >
      <Text>Abrir Modal</Text>
      <Button title="Abrir Modal" onPress={() => setisVisible(true)} />
      <Modal animationType="fade" visible={isVisible} transparent>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.3)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              width: 200,
              height: 200,
              justifyContent: "center",
              alignItems: "center",
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.25,
              elevation: 4,
            }}
          >
            <Text>Modal</Text>
            <Text>Cuerpo del modal</Text>
            <Button title="Cerrar" onPress={() => setisVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
