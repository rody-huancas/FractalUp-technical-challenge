import axios from "axios";
import { API_KEY_PIXABY, API_REST_COUNTRIES, API_URL_PIXABY } from "../config/env";

// OBTENER BANDERA SEGÚN EL ID
export const getFlagByCountryCode = async (code) => {
  try {
    const response = await axios(`${API_REST_COUNTRIES}/alpha/${code}?fields=flags`);
    const flag = response.data.flags.svg;
    return flag;
  } catch (error) {
    console.log("[ERROR AL OBTENER LA BANDERA]: " + error);
    return null;
  }
};

// TRAER TODAS LAS BANDERAS
export const getAllFlagsByCountry = async () => {
  try {
    const response = await axios(`${API_REST_COUNTRIES}/all?fields=name,flags,flag,maps`);
    return response.data;
  } catch (error) {
    console.log("[ERROR AL OBTENER LA BANDERA]: " + error);
    return null
  }
}

// BUSCAR SITIOS DE UN PAÍS
export const getSiteCountry = async (country) => {
  try {
    const response = await axios.get(`${API_URL_PIXABY}/?key=${API_KEY_PIXABY}&q=turistico+${country}&image_type=photo`);
    return response.data.hits[0].largeImageURL;
  } catch (error) {
    if (error.response && error.response.status === 429) {
      console.log('Ocurrió un error inesperado.');
    } else {
      console.error('[ERROR AL OBTENER LOS LUGARES TURÍSTICOS]: ', error);
    }
    return null;
  }
};