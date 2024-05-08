import { api } from "@lib/api";
import { AxiosError } from "axios";

export const getPopularMoviesService = async (): Promise<
  Array<IPopularMovies>
> => {
  try {
    const { data } = await api.get<IPopularMoviesResponse>("/3/movie/popular");

    if (data?.results?.length > 0) {
      return data.results;
    }

    return [];
  } catch (error: any){
    const err = error as AxiosError;

    return [err.request];
  }
};
