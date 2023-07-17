import axios from "axios"

const URL = "https://api-v1-tamy.onrender.com"

export const getProjects = () => axios.get(`${URL}/projects`)

export const createPost = (payload) => axios.post(`${URL}/posts`, payload)