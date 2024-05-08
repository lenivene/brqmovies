interface MovieContextProps {
  isLoadingPopularMovies: boolean;
  movieDetails: IPopularMovies | null;
  favoriteMovies: Array<IPopularMovies>;
  popularMovies: Array<IPopularMovies>;
  setMovieDetails: (data: IPopularMovies) => void;
  addFavoriteMovie: (data: IPopularMovies) => void;
  removeFavoriteMovieById: (movieId: number) => Promise<void>;
  loadPopularMovies(): Promise<void>;
  checkHasMovieInFavorite: (movieId: number) => boolean;
}
