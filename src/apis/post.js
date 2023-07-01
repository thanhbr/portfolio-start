import axios from "axios"

const URL = "https://api-v1-tamy.onrender.com"

export const createPost = (payload) => axios.post(`${URL}/posts`, payload)