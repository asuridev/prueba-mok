import axios from "axios";

export const apiRandomUser = axios.create({
  baseURL:'https://randomuser.me/api'
});