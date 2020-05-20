import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class OSTService{

    constructor(){}

    getAllOST() {
        const url = `${API_URL}/api/ost/`;
        return axios.get(url).then(response => response.data);
    }

    getOSTByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }

    getOST(pk= '') {
        const url = `${API_URL}/api/ost/${pk}`;
        return axios.get(url).then(response => response.data);
    }

    deleteOST(ost){
        const url = `${API_URL}/api/ost/${ost.pk}`;
        return axios.delete(url);
    }

    createOST(ost){
        const url = `${API_URL}/api/ost/`;
        return axios.post(url,ost);
    }

    updateOST(ost){
        const url = `${API_URL}/api/ost/${ost.pk}`;
        return axios.put(url,ost);
    }

}