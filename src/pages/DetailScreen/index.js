import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import MovieDetail from "../../componentes/MovieDetail";
import MovieList from "../../componentes/MovieList";

import { Container } from "./styles";

const DetailScreen = ({ navigation, route }) => {
  const movie = route.params.movie;

  return <MovieDetail item={movie} />;
};

export default DetailScreen;
