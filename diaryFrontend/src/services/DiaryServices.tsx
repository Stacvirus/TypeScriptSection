import axios from "axios";
import { Diary, Entry } from "../types";

const url = "http://localhost:3000/api/diaries";

export const getAllDiaries = async () => {
  const res = await axios.get<Diary[]>(url);
  return res.data;
};

export const postEntry = async (object: Entry) => {
  const res = await axios.post<Diary>(url, object);
  return res.data;
};
