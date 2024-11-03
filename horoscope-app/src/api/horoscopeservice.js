// src/api/horoscopeService.js
import axios from 'axios';

export const getDailyHoroscope = async (sign) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/horoscope/${sign}`);    
    return response.data;
  } catch (error) {
    console.error("Error fetching horoscope:", error);
    return null;
  }
};
