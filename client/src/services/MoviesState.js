import MoviesService from './MoviesService';

class MoviesState {
  moviesService;
  setMovieList;
  movieList;
  setSavedList;
  savedList;
  setMovie;
  setMovieEdit;
  setEditing;
  setDeleteMovie;
  setAddedMovie;

  constructor(moviesService) {
    this.moviesService = moviesService;
  }

  async getMovies() {
    const response = await this.moviesService.getMovies();
    this.movieList = response.data;
    this.setMovieList(response.data);
  }

  async fetchMovie(id) {
    const response = await this.moviesService.fetchMovie(id);
    this.setMovie(response.data);
  }

  async getMovie(id) {
    const response = await this.moviesService.fetchMovie(id);
    this.setMovieEdit(response.data);
  }

  async editMovie(movie, doneEditing) {
    this.setEditing(true);
    await this.moviesService.editMovie(movie);
    this.setEditing(false);
    doneEditing();
  }

  async deleteMovie(id) {
    this.setDeleteMovie(true);
    await this.moviesService.deleteMovie(id);
    this.setDeleteMovie(false);
  }

  async addMovie(movie) {
    this.setAddedMovie(true);
    await this.moviesService.addMovie(movie);
    this.setAddedMovie(false);
  };

  addToSavedList(movie) {
    this.setSavedList([...this.savedList, movie]);
  };

  get getMovieList() {
    return this.movieList;
  }
}

export default new MoviesState(MoviesService);
