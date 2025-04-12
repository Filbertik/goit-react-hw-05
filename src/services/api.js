import axios from "axios";
const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmExYWUxZGFmOGYzMmEwNmY4OWJkYjQyZGY3MTA5YiIsIm5iZiI6MTc0NDQ1NTgyNS40ODE5OTk5LCJzdWIiOiI2N2ZhNDg5MTdiNDNiZGNlMjBhZWM1MmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.6sV-ba8HkFKnAmpwItPMUJaT64L8o691gjkbLmApbpw";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    accept: "application/json",
  },
  params: {
    language: "en-US",
  },
};

const searchMovie = async (query, page = 1) => {
  if (!query) return console.log("Query is empty!");
  const response = await axios(`search/movie`, {
    ...options,
    params: { ...options.params, include_adult: false, query, page },
  });
  return response.data;
};

const trendingMovie = async (page = 1) => {
  const response = await axios(`trending/movie/day`, {
    ...options,
    params: {
      ...options.params,
      include_adult: false,
      page,
    },
  });
  return response.data;
};

const detailsMovie = async (movieId) => {
  const response = await axios(`movie/${movieId}`, options);
  return response.data;
};

const reviewsMovie = async (movieId, page = 1) => {
  const response = await axios(`movie/${movieId}/reviews`, {
    ...options,
    params: { ...options.params, page },
  });
  return response.data;
};

const creditsMovie = async (movieId) => {
  const response = await axios(`movie/${movieId}/credits`, options);
  return response.data;
};

export { searchMovie, trendingMovie, detailsMovie, reviewsMovie, creditsMovie };
