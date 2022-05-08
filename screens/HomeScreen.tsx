import { StyleSheet, ScrollView } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import Pin from "../components/Pin";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  return (
    <ScrollView>
      <View style={styles.container}>
      <Pin
        pin={{
          title: "one",
          image:
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/3.jpeg",
        }}
      />
      <Pin
        pin={{
          title: "title two",
          image:
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/5.jpeg",
        }}
      />
      <Pin
        pin={{
          title: "title two",
          image:
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/6.jpeg",
        }}
      />
      <Pin
        pin={{
          title: "title two",
          image:
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/7.jpeg",
        }}
      />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
