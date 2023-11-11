import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useForm } from "../hooks/useForm";

export const TextInputScreen = () => {

  const {form,onChange} = useForm({
    name: "",
    email: "",
    phone: "",
  })

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ marginHorizontal: 20 }}>
            <Text>TextInputScreen</Text>
            <TextInput
              placeholder="Ingrese su nombre"
              onChangeText={(value) => onChange(value, "name")}
              autoCorrect={false}
              autoCapitalize="words"
              style={styles.TextInputStyle}
            />

            <TextInput
              placeholder="Ingrese su email"
              onChangeText={(value) => onChange(value, "email")}
              style={styles.TextInputStyle}
              keyboardType="email-address"
            />

            <TextInput
              placeholder="Ingrese su teléfono"
              onChangeText={(value) => onChange(value, "phone")}
              style={styles.TextInputStyle}
              keyboardType="phone-pad"
            />

            {JSON.stringify(form, null, 2)}
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  TextInputStyle: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: "rgba(0,0,0,0.3)",
    marginVertical: 10,
  },
});
