import axios from "axios";
import { urlObjectKeys } from "next/dist/shared/lib/utils";

const url = "https://ediaristas-workshop.herokuapp.com";
export const ApiService = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});
