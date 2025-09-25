import axios from "axios";
const API_URL = "http://localhost:3000";

export const getUsers = async (token) => {
  const res = await axios.get(`${API_URL}/users`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const createUser = async (userData, token) => {
  const res = await axios.post(`${API_URL}/auth/register`, userData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const updateUser = async (id, userData, token) => {
  const res = await axios.put(`${API_URL}/users/${id}`, userData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const deactivateUser = async (id, token) => {
  const res = await axios.patch(`${API_URL}/users/${id}/deactivate`, {}, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const activateUser = async (id, token) => {
    const res = await axios.patch(`${API_URL}/users/${id}/activate`,{}, {
        headers: {Authorization: `Bearer ${token}`},
    });
    return res.data;
};
