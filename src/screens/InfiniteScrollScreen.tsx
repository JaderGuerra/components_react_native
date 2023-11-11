import { useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { styles } from "../theme/appTheme";
import Constants from "expo-constants";

export const InfiniteScrollScreen = () => {
  const [num, setNum] = useState([0, 1, 2, 3, 4, 5]);

  const RenderItem = (item: number) => (
    <Image source={{uri:`https://fastly.picsum.photos/id/237/200/300}}`}}/>
  );

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = num.length + i;
      setNum([...num,...newArray]);
    }
  };

  return (
    <View
      style={{ ...styles.globalMargin, marginTop: Constants.statusBarHeight }}
    >
      <FlatList
        data={num}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => RenderItem(item)}
        ListHeaderComponent={<Text>InfiniteScroll</Text>}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

const stylesLocal = StyleSheet.create({
  textItem: {
    height: 150,
  },
});
