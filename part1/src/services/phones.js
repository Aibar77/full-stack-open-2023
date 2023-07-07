import axios from "axios";
const baseUrl = "api/persons";

const getAll = () => {
  return axios.get(baseUrl).then((res) => res.data);
};

const addNumber = (newPerson) => {
  return axios.post(baseUrl, newPerson).then((res) => res.data);
};
const deleteNumber = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};
const updateNumber = (id, newPerson) => {
  return axios.put(`${baseUrl}/${id}`, newPerson).then((res) => res.data);
};

export default {
  getAll,
  addNumber,
  deleteNumber,
  updateNumber,
};
