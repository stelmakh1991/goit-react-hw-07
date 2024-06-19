import axios from "axios";

const BASE_URL = "https://6672aac46ca902ae11b13d71.mockapi.io/";

const TIMEOUT = 1000 * 30;

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

export default instance;