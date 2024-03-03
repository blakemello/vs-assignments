import axios from "axios"

const baseUrl = "https://api.vschool.io/blakemello"


export const getAllItems = () => axios.get(baseUrl + '/todo').then(res => res.data);

export const addItem = (item) => axios.post(baseUrl + '/todo', item).then(res => res.data);

export const editItem = (id, item) => axios.put(baseUrl + '/todo/' + id, item).then(res => res.data);

export const deleteItem = (id) => axios.delete(baseUrl + '/todo/' + id).then(res => null);