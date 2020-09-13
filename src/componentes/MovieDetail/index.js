import React from "react";
import { Linking } from "expo";
import {
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Container } from "./styles";
import {
  MovieImage,
  Info,
  Name,
  Year,
  Rating,
  RatingStars,
} from "../MovieList/styles";

const MovieDetail = ({ item }) => {
  const youtubeUrl = `https://www.youtube.com/watch?v=${item.yt_trailer_code}`;

  const getStars = () => {
    let stars = "";
    return stars.padStart(item.rating, "★");
  };

  const callYoutube = () => {
    try {
      Linking.openURL(youtubeUrl);
    } catch (error) {
      alert(error.msg);
    }
  };

  return (
    <Container>
      <ImageBackground
        imageStyle={{ opacity: 0.5 }}
        style={{ height: 160, flexDirection: "row", padding: 16 }}
        source={{ uri: item.background_image }}
      >
        <MovieImage source={{ uri: item.medium_cover_image }} />
        <Info style={{ flex: 1 }}>
          <Name numberOfLines={1}>{item.title_long}</Name>
          <Year>Ano: {item.year}</Year>
          <Rating style={{ color: item.rating > 5 ? "yellow" : "red" }}>
            Nota: {item.rating}
          </Rating>
          <RatingStars>{getStars()}</RatingStars>
        </Info>
      </ImageBackground>

      <ScrollView style={{ flex: 1 }}>
        <View style={{ paddingVertical: 20, paddingHorizontal: 16 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginVertical: 10,
              color: "#fff",
            }}
          >
            Gêneros
          </Text>
          <Text style={{ color: "#fff", fontSize: 14 }}>
            {item.genres.map((item) => item + " ")}
          </Text>

          <TouchableOpacity onPress={callYoutube}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                marginVertical: 10,
                color: "orange",
              }}
            >
              Ver trailler
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginVertical: 10,
              color: "#fff",
            }}
          >
            Description
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 14,
            }}
          >
            {item.description_full}
          </Text>
        </View>
      </ScrollView>
    </Container>
  );
};

export default MovieDetail;
