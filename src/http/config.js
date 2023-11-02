import axios from 'axios'
let axiosInstance = axios.create({
    baseURL: '',
    headers: {
        'Content-Type': 'application/json',
        "Accept": 'application/json',
    }
});
axiosInstance.interceptors.request.use(function (config) {
    console.log('axiosInstance.interceptors.request', JSON.stringify(config))
    return config
}, function (err) {
    return Promise.reject(err)
})
axiosInstance.interceptors.response.use(function (config) {
    console.log('axiosInstance.interceptors.response', JSON.stringify(config))
    return config
})
export default axiosInstance