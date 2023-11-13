import { useRef, useState } from "react";
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Constants from "expo-constants";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { StackScreenProps } from "@react-navigation/stack";

const { width: windowsWidth } = Dimensions.get("window");

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: "Titulo 1",
    desc: "Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.",
    img: require("../assets/slide-1.png"),
  },
  {
    title: "Titulo 2",
    desc: "Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ",
    img: require("../assets/slide-2.png"),
  },
  {
    title: "Titulo 3",
    desc: "Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.",
    img: require("../assets/slide-3.png"),
  },
];

interface Props extends StackScreenProps<any, any> {}

export const SlidesScreen = ({ navigation }: Props) => {
  const [activeIndex, setCurrentSlide] = useState(0);
  const isVisible = useRef(false);

  const renderItem = (item: Slide) => (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        borderRadius: 5,
        padding: 40,
        justifyContent: "center",
      }}
    >
      <Image
        source={item.img}
        style={{
          width: 350,
          height: 400,
          resizeMode: "center",
        }}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subTitle}>{item.desc}</Text>
    </View>
  );

  return (
    <View
      style={{
        marginTop: Constants.statusBarHeight,
        flex: 1,
      }}
    >
      <Carousel
        vertical={false}
        data={items}
        sliderWidth={windowsWidth}
        itemWidth={windowsWidth}
        renderItem={({ item }: any) => renderItem(item)}
        loop={false}
        layout="default"
        onSnapToItem={(index: any) => {
          setCurrentSlide(index);
          if (index === 2) {
            isVisible.current = true;
          }
        }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
          alignItems: "center",
        }}
      >
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor: "#5856D6",
          }}
        />

        {isVisible && (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              width: 140,
              height: 50,
              borderRadius: 10,
              backgroundColor: "#5856D6",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={{ fontSize: 25, color: "white", marginRight: 10 }}>
              Entrar
            </Text>
            <FontAwesome name="chevron-right" color="white" size={30} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#5856D6",
  },
  subTitle: {
    fontSize: 16,
  },
});
