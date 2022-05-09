import { StyleSheet, ScrollView } from "react-native";
import React from "react";
import Pin from "../Pin";
import { Text, View } from "../../components/Themed";
// import pins from "../../assets/data/pins";

interface MasonryListProps {
  pins: {
    id: string;
    title: string;
    image: string;
  }[];
}

const MasonryList = (props: MasonryListProps) => {
  const { pins } = props;
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* 1st Column */}
        <View style={styles.column}>
          {pins
            .filter((_, index) => index % 2 === 0)
            .map((pin) => (
              <Pin pin={pin} key={pin.id} />
            ))}
        </View>

        {/* 2nd column */}
        <View style={styles.column}>
          {pins
            .filter((_, index) => index % 2 === 1)
            .map((pin) => (
              <Pin pin={pin} key={pin.id} />
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default MasonryList;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },
  column: {
    flex: 1,
  },
});
