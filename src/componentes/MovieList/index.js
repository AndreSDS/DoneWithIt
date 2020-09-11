import React from "react";
import { Text, View, Image } from "react-native";

import { Container, MovieImage, Info, Name, Year, Rating } from "./styles";

const MovieList = () => {
  return (
    <Container>
      <MovieImage source={{ uri: "https://picsum.photos/100/130" }} />
      <Info style={{ flex: 1 }}>
        <Name>Nome do filme</Name>
        <Year>Ano: 2018</Year>
        <Rating>Nota: 7</Rating>
      </Info>
    </Container>
  );
};

export default MovieList;
