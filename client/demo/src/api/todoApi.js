import axiosClient from "./axiosClient";

const todoApi = {
  getAll: () => axiosClient.get("/todo"),
};

export default todoApi;
