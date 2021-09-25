import axios from "axios";

const axiosApi = axios.create({
    baseURL: 'https://exam-9-aidana-default-rtdb.firebaseio.com'
});

export default axiosApi;