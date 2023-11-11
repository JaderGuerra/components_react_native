import { SectionList, Text, View } from "react-native";
import Constants from "expo-constants";
import { styles } from "../theme/appTheme";

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: "DC Comics",
    data: ["Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin"],
  },
  {
    casa: "Marvel Comics",
    data: ["Antman", "Thor", "Spiderman", "Antman","Antman", "Thor", "Spiderman", "Antman","Antman", "Thor", "Spiderman", "Antman","Antman", "Thor", "Spiderman", "Antman","Antman", "Thor", "Spiderman", "Antman","Antman", "Thor", "Spiderman", "Antman","Antman", "Thor", "Spiderman", "Antman","Antman", "Thor", "Spiderman", "Antman","Antman", "Thor", "Spiderman", "Antman","Antman", "Thor", "Spiderman", "Antman","Antman", "Thor", "Spiderman", "Antman","Antman", "Thor", "Spiderman", "Antman","Antman", "Thor", "Spiderman", "Antman","Antman", "Thor", "Spiderman", "Antman","Antman", "Thor", "Spiderman", "Antman","Antman", "Thor", "Spiderman", "Antman"],
  },
  {
    casa: "Anime",
    data: ["Kenshin", "Goku", "Saitama","One Piece","Naruto","Kenshin", "Goku", "Saitama","One Piece","Naruto","Kenshin", "Goku", "Saitama","One Piece","Naruto","Kenshin", "Goku", "Saitama","One Piece","Naruto","Kenshin", "Goku", "Saitama","One Piece","Naruto","Kenshin", "Goku", "Saitama","One Piece","Naruto","Kenshin", "Goku", "Saitama","One Piece","Naruto","Kenshin", "Goku", "Saitama","One Piece","Naruto","Kenshin", "Goku", "Saitama","One Piece","Naruto","Kenshin", "Goku", "Saitama","One Piece","Naruto"],
  },
];

export const CustomSectionList = () => {
  return (
    <View
      style={{ ...styles.globalMargin, marginTop: Constants.statusBarHeight }}
    >
      <SectionList
        sections={casas}
        keyExtractor={(item, index) => item + index}
        stickySectionHeadersEnabled
        renderItem={({ item }) => <Text>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <View style={{ backgroundColor: "white" }}>
            <Text style={{fontWeight:'bold',fontSize:25}}>{section.casa}</Text>
          </View>
        )}
      />
    </View>
  );
};
