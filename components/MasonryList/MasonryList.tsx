import { StyleSheet, ScrollView, useWindowDimensions } from "react-native";
import React, {useState} from "react";
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
  
  // const [numColumns, setNumColumns] = useState(2)

  const width = useWindowDimensions().width
  const numColumns = Math.ceil(width / 350)

  return (
    <ScrollView>
      <View style={styles.container}>
        {Array.from(Array(numColumns)).map((_, colIndex) => (
          <View style={styles.column}>
            {pins
              .filter((_, index) => index % numColumns === colIndex)
              .map((pin) => (
                <Pin pin={pin} key={pin.id} />
              ))}
          </View>
        ))}
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
