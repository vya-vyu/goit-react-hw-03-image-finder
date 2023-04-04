import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '4711889-1df4bd4dd90c9a16aff582e9e';

const getImagesApi = (name, page = 1) => {
  return axios.get('', {
    params: {
      key: API_KEY,
      q: name,
      per_page: 12,
      page,
    },
  });
};

export default getImagesApi;
