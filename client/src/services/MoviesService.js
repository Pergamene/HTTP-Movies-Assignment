import axios from 'axios';

class MoviesService {

  async getMovies() {
    const response = await this._createBaseRequest().get();
    return response;
  }

  async fetchMovie(id) {
    const response = await this._createBaseRequest().get(`/${id}`);
    return response;
  }

  async editMovie(movie) {
    const reponse = await this._createBaseRequest().put(`/${movie.id}`, movie);
    return reponse;
  }

  async deleteMovie(id) {
    const response = await this._createBaseRequest().delete(`/${id}`);
    return response;
  }

  async addMovie(movie) {
    const response = await this._createBaseRequest().post('/', movie);
    return response;
  }

  _createBaseRequest() {
    return axios.create({
      baseURL: 'http://localhost:5000/api/movies',
    });
  }
}

export default new MoviesService();
