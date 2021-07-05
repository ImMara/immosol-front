import axios from 'axios';

const BASE_URL = 'https://marastudio.xyz'

export const getLocations = () =>{
    return axios
        .get(`${BASE_URL}/api/locations`)
        .then((res)=>{return res.data})
}

export const getLocation = (id) =>{
    return axios
        .get(`${BASE_URL}/api/location/${id}`)
        .then(res => res.data)
}

export const getVentes = () => {
    return axios
        .get(`${BASE_URL}/api/ventes`)
        .then((res)=>{return res.data})
}

export const getVente = (id) => {
    return axios
        .get(`${BASE_URL}/api/vente/${id}`)
        .then(res => res.data)
}

export const getRegion = () =>{
    return axios
        .get(`${BASE_URL}/api/region`)
        .then(res => res.data)
}
export const getFeatured = () =>{
    return axios
        .get(`${BASE_URL}/api/featured`)
        .then(res => res.data)
}