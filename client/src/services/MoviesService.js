import axios from 'axios';

class MoviesService {

  async getMovies() {
    const response = await this._createBaseRequest().get();
    return response;
  }

  _createBaseRequest() {
    return axios.create({
      baseURL: 'http://localhost:5000/api/movies',
    });
  }
}

export default new MoviesService();
