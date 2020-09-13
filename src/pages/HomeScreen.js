import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import MovieList from "../componentes/MovieList";
import axios from "axios";

const HomeScreen = ({ navigation }) => {
  const url = "https://yts.mx/api/v2/list_movies.json";
  const [movies, setMovies] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(url);
      const content = response.data;
      const { movies: data } = content.data;
      setMovies(data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getData();
  });

  const callDetail = (item) => {
    navigation.navigate("Details", { movie: item });
  };

  return (
    <View style={{ flex: 1, paddingHorizontal: 24, paddingVertical: 8 }}>
      <FlatList
        data={movies}
        keyExtractor={({ item }) => item}
        renderItem={({ item }) => (
          <MovieList onPress={() => callDetail(item)} item={item} />
        )}
      />
    </View>
  );
};

export default HomeScreen;
