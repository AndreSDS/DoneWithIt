import React, { useState } from "react";
import { View, FlatList } from "react-native";
import MovieList from "../componentes/MovieList";

const HomeScreen = () => {
  const [movies, setMovies] = useState([1, 2, 3]);

  return (
    <View style={{ flex: 1, paddingHorizontal: 24, paddingVertical: 8 }}>
      <FlatList data={movies} renderItem={() => <MovieList />} />
    </View>
  );
};

export default HomeScreen;
