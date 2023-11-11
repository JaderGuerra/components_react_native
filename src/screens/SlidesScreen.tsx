import { Dimensions, Image, ImageSourcePropType, Text, View } from "react-native";
import Constants from "expo-constants";
import Carousel from "react-native-snap-carousel";

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

export const SlidesScreen = () => {
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
        <Image source={item.img}
        style={{
            width:350,
            height:400,
            resizeMode:'center',
        }}
        />
    </View>
  );

  return (
    <View
      style={{
        marginTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: "red",
      }}
    >
      <Carousel
        vertical={false}
        data={items}
        sliderWidth={300}
        itemWidth={300}
        renderItem={({ item }: any) => renderItem(item)}
      />
    </View>
  );
};
