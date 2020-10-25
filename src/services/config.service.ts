import axios from "axios";

const { REACT_APP_API_URL: baseURL } = process.env;

export const apiConfig = axios.create({
  baseURL,
});
