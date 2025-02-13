import axios from "axios";

const TMDB_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGI1NTJiZmFmMjAyNTRjN2U1MjcxODA1NGVhNDQxNiIsIm5iZiI6MTczOTM2MTMzMC41NjQ5OTk4LCJzdWIiOiI2N2FjOGMzMmEyZTJmOTllZDRiYjZiNmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.yCN5XUDETsu-vyqPJYXqErfxneOXNxTJlejrAEj0avk";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
  },
});

export default instance;
