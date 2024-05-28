import axios from "axios";

export const baseURL = "http://localhost:5000";

const axiosPublic = axios.create({
    baseURL: baseURL
})

export default axiosPublic;