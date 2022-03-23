import axios from "axios"

const endpoint = "http://localhost:3001"
const createConfig = (cancelToken = null) => ({ cancelToken })

export const postRequest = (uri, obj = {}, axiosToken = null) => {
    return new Promise((resolve, reject) => {
        axios.post(`${endpoint}/${uri}`, obj, createConfig(axiosToken))
            .then(function (response) {
                resolve(response.data)
            })
            .catch(function (error) {
                reject(error.response.data);
            });
    })
}