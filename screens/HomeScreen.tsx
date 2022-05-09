import { useEffect, useState } from "react";
import { useNhostClient } from "@nhost/react";
import MasonryList from "../components/MasonryList";
import { Alert } from "react-native";

const GET_PIN_QUERY = `
query MyQuery {
  pins {
    created_at
    id
    image
    title
    user_id
  }
}
`;

export default function HomeScreen() {
  const nhost = useNhostClient();

  const [pins, setPins] = useState([]);

  const fetchPins = async () => {
    const response = await nhost.graphql.request(GET_PIN_QUERY);

    if (response.error) {
      Alert.alert("Error fetching pins");
    } else {
      setPins(response.data.pins);
    }
  };

  useEffect(() => {
    fetchPins();
  }, []);

  return <MasonryList pins={pins} />;
}
