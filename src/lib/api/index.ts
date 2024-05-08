import axios from "axios";

import { THE_MOVIE_DB_API_KEY } from "@env";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/",
  headers: {
    Authorization: `Bearer ${THE_MOVIE_DB_API_KEY}`
  },
  params: {
    language: "pt-BR",
  },
});
