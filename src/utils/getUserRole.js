// utils/getUserRole.js
import axiosInstance from './axiosInstance';

export const getUserRole = async () => {
  try {
    const response = await axiosInstance.get('/user-role/');
    return response.data.role; // e.g., "Doctor", "Associate"
  } catch (err) {
    console.error('Failed to fetch user role:', err);
    return null;
  }
};
