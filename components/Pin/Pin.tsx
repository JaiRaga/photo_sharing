import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState, useEffect } from "react";

interface PinProps {
  pin: {
    title: string;
    image: string;
  };
}

const Pin = (props: PinProps) => {
  const [ratio, setRatio] = useState(1);

  const { title, image } = props.pin;

  const onLike = () => {};

  useEffect(() => {
    if (image) {
      Image.getSize(image, (width, height) => setRatio(width / height));
    }
  }, [image]);

  return (
    <View style={styles.pin}>
      <View>
        <Image
          source={{
            uri: image,
          }}
          style={[styles.image, { aspectRatio: ratio }]}
        />
        <Pressable onPress={onLike} style={styles.heartBtn}>
          <AntDesign name="hearto" size={16} color="black" />
        </Pressable>
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Pin;

const styles = StyleSheet.create({
  pin: {
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 15,
  },
  image: {
    width: "100%",
    borderRadius: 25,
  },
  heartBtn: {
    backgroundColor: "#D3CFB4",
    position: "absolute",
    bottom: 10,
    right: 10,
    padding: 5,
    borderRadius: 50,
  },
});
