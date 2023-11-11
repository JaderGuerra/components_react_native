import { ScrollView, Text, View, RefreshControl } from "react-native";
import { styles } from "../theme/appTheme";
import { useState } from "react";
import Constants from "expo-constants";

export const PullToRefresh = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>("");

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log("terminamos");
      setRefreshing(false);
      setData("Hola Mundo");
    }, 2500);
  };

  return (
    <ScrollView
      style={{ marginTop: Constants.statusBarHeight }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={150}
          colors={["yellow", "green", "red"]}
          title="Loadiing..."
          titleColor="white"
        />
      }
    >
      <View style={styles.globalMargin}>
        <Text>PullToRefresh</Text>
        {data && <Text>{data}</Text>}
      </View>
    </ScrollView>
  );
};
