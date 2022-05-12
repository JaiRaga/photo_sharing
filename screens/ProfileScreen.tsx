import { StyleSheet, Image, ScrollView, Pressable } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import MasonryList from "../components/MasonryList";
import { Text, View } from "../components/Themed";
import pins from "../assets/data/pins";
import { Entypo, Feather } from "@expo/vector-icons";
import { useNhostClient, useSignOut } from "@nhost/react";

export default function ProfileScreen() {
  // const { signOut } = useSignOut();
  const nhost = useNhostClient();
  const signOut = () => {
    console.log(1, "clicked");
    nhost.auth.signOut();
    console.log(2, "done");
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.icons}>
          <Pressable onPress={signOut}>
            <Feather name="share" size={24} color="black" style={styles.icon} />
          </Pressable>
          <Entypo
            name="dots-three-horizontal"
            size={24}
            color="black"
            style={styles.icon}
          />
        </View>
        <Image
          source={{
            uri: "https://avatars.githubusercontent.com/u/44367062?v=4",
          }}
          style={styles.image}
        />
        <Text style={styles.title}>Raga</Text>
        <Text style={styles.subTitle}>108 followers | 130 following</Text>
      </View>
      <MasonryList pins={pins} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  image: {
    width: 200,
    aspectRatio: 1,
    borderRadius: 200,
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
  subTitle: {
    color: "#181818",
    fontWeight: "600",
    margin: 10,
  },
  header: {
    alignItems: "center",
  },
  icons: {
    flexDirection: "row",
    alignSelf: "flex-end",
    padding: 10,
  },
  icon: {
    paddingHorizontal: 10,
  },
});
