import React, { useCallback, useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { useMovie } from "@hooks/movie";
import { ItemCardMovie } from "@components/item-card-movie";
import { MovieList } from "@components/movie-list";

import { IHomeTabsRoutersProps } from "@routers/types";

import { NoContentContainer, NoContentText } from "../styles";
import { Container } from "./styles";

export const AllMoviesHomeScreen: React.FC = () => {
  const insets = useSafeAreaInsets();
  const { popularMovies, setMovieDetails, loadPopularMovies } = useMovie();
  const { navigate } = useNavigation<IHomeTabsRoutersProps>();

  const onPressItemCardMovie = useCallback((item: IPopularMovies) => {
    setMovieDetails(item);
    navigate("SingleDetails");
  }, []);

  useEffect(() => {
    loadPopularMovies();
  }, []);

  return (
    <Container style={{ paddingBottom: Math.max(insets.bottom, 16) }}>
      <MovieList
        data={popularMovies}
        keyExtractor={(item: any) => item.id.toString()}
        ListEmptyComponent={() => (
          <NoContentContainer>
            <NoContentText>Nenhum filme favorito encontrado!</NoContentText>
          </NoContentContainer>
        )}
        renderItem={({ item, index }) => (
          <ItemCardMovie
            onPress={() => {
              onPressItemCardMovie(item as IPopularMovies);
            }}
            key={String(index)}
            data={item as IPopularMovies}
          />
        )}
      />
    </Container>
  );
};
