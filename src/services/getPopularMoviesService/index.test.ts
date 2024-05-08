import { getPopularMoviesService } from "./index";
import { IPopularMoviesResult } from "./types";

describe("getPopularMoviesService", () => {
  let result: IPopularMoviesResult[];

  beforeAll(async () => {
    result = await getPopularMoviesService();
  })

  it('should return a non-empty list of movies when there are results', async () => {
    expect(Array.isArray(result)).toBeTruthy();
    expect(result.length).toBeGreaterThan(0);
  });

  it("should contain a movie with a title in original_title", async () => {
    expect(result[0].original_title).toBeTruthy();
  });

  it('should contain a movie with a cover in backdrop_path', async () => {
    expect(result[0].backdrop_path).toBeTruthy();
  });

  it('should contain a movie with a description in overview', async () => {
    expect(result[0].overview).toBeTruthy();
  });
});
