import { getPopularMoviesService } from "@services/getPopularMoviesService";
import React, { createContext, useCallback, useMemo, useState } from "react";
import Toast from "react-native-root-toast";

import { Storage } from "@lib/storage";

const storage = new Storage<"favoriteMovies">();

export const MovieContext = createContext<MovieContextProps>(
  {} as MovieContextProps
);

export const MovieProvider: ReactFC = ({ children }) => {
  const [isLoadingPopularMovies, setIsLoadingPopularMovies] = useState(false);
  const [popularMovies, setPopularMovies] = useState<
    MovieContextProps["popularMovies"]
  >([]);
  const [favoriteMovies, setFavoriteMovie] = useState<
    MovieContextProps["favoriteMovies"]
  >([]);
  const [movieDetails, setDetails] =
    useState<MovieContextProps["movieDetails"]>(null);

  const setMovieDetails = useCallback(
    (data: IPopularMovies) => setDetails(data),
    []
  );

  const addFavoriteMovie = async (data: IPopularMovies) => {
    setFavoriteMovie((oldMovies) => {
      const existsMovieInFavorite = oldMovies.find(
        (movie) => movie.id === data.id
      );

      const existsMovie = !!existsMovieInFavorite;

      const toastMessage = !existsMovie
        ? "Filme adicionado aos favoritos!"
        : "Esse filme já existe nos favoritos!";

      const newState = !existsMovie ? [...oldMovies, data] : oldMovies;

      storage.set("favoriteMovies", JSON.stringify(newState));

      Toast.show(toastMessage, {
        duration: Toast.durations.LONG,
      });

      return newState;
    });
  };

  const removeFavoriteMovieById = async (movieId: number) => {
    setFavoriteMovie((oldMovies) => {
      const movies = oldMovies.filter((movie) => movie.id !== movieId);

      storage.set("favoriteMovies", JSON.stringify(movies));

      Toast.show("Filme removido!", {
        duration: Toast.durations.LONG,
      });

      return movies;
    });
  };

  const checkHasMovieInFavorite = (movieId: number) => {
    const existMovieInFavorite = favoriteMovies.find(
      (movie) => movie.id === movieId
    );

    return !!existMovieInFavorite;
  };

  const loadPopularMovies = useCallback(async () => {
    setIsLoadingPopularMovies(true);

    const movies = await getPopularMoviesService().finally(() => {
      setIsLoadingPopularMovies(false);
    });

    setPopularMovies(movies);

    try {
      const moviesFavoriteResult = await storage.get("favoriteMovies");

      if (moviesFavoriteResult) {
        setFavoriteMovie(JSON.parse(moviesFavoriteResult));
      }
    } catch (error) {}
  }, []);

  const values = useMemo(
    () => ({
      isLoadingPopularMovies,
      favoriteMovies,
      addFavoriteMovie,
      removeFavoriteMovieById,
      popularMovies,
      movieDetails,
      setMovieDetails,
      loadPopularMovies,
      checkHasMovieInFavorite,
    }),
    [
      isLoadingPopularMovies,
      favoriteMovies,
      addFavoriteMovie,
      removeFavoriteMovieById,
      popularMovies,
      movieDetails,
      setMovieDetails,
      loadPopularMovies,
      checkHasMovieInFavorite,
    ]
  );

  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
};
