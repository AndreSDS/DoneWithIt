import React from "react";
import { Text, View, Image } from "react-native";

import {
  Container,
  MovieImage,
  Info,
  Name,
  Year,
  Rating,
  RatingStars,
} from "./styles";

const MovieList = ({ item }) => {
  const getStars = () => {
    let stars = "";
    return stars.padStart(item.rating, "★");
  };

  return (
    <Container>
      <MovieImage source={{ uri: item.medium_cover_image }} />
      <Info style={{ flex: 1 }}>
        <Name numberOfLines={1}>{item.title}</Name>
        <Year>Ano: {item.year}</Year>
        <Rating style={{ color: item.rating > 5 ? "yellow" : "red" }}>
          Nota: {item.rating}
        </Rating>
        <RatingStars>{getStars()}</RatingStars>
      </Info>
    </Container>
  );
};

export default MovieList;
