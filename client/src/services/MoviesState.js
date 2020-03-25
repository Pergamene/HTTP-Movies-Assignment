import MoviesService from './MoviesService';

class MoviesState {
  moviesService;
  setMovieList;

  constructor(moviesService) {
    this.moviesService = moviesService;
  }

  async getMovies() {
    const response = await this.moviesService.getMovies();
    this.setMovieList(response.data);
  }
}

export default new MoviesState(MoviesService);
