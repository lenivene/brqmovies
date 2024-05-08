import { useContext } from "react";

import { MovieContext } from "./movie-provider";

export const useMovie = (): MovieContextProps => useContext(MovieContext);
