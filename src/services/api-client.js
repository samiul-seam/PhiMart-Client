import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://phimart-one-sable.vercel.app/api",
})

export default apiClient;

