import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api";
const API_SAVEFILE_URL = "http://localhost:8080/api/savefile";

const getAPI = (json) => {
    return axios.post(API_BASE_URL, json );
} 
const saveFileAPI = (file) => {
    const formData = new FormData();
    formData.append('file', file);

    return axios.post(API_SAVEFILE_URL, formData);
};

export { getAPI,  saveFileAPI};