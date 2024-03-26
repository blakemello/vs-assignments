import axios from "axios"

const baseUrl = "https://api.vschool.io/blakemello"


export const getAllItems = () => axios.get(baseUrl + '/thing').then(res => res.data);

export const addItem = (item) => axios.post(baseUrl + '/thing', item).then(res => res.data);

export const editItem = (id, item) => axios.put(baseUrl + '/thing/' + id, item).then(res => res.data);

export const deleteItem = (id) => axios.delete(baseUrl + '/thing/' + id).then(res => null);