import axios from 'axios'

class ServiceAxios {
    constructor() {
        this.token = localStorage.getItem('auth_token')
        this.axiosInstance = axios.create({
            timeout: 30000,
        })
        this.assignToken()
    }

    assignToken() {
        if (this.token) {
            this.axiosInstance.defaults.headers.common['Authorization'] = this.token;
        } else {
            // axiosInstance.defaults.headers.common['Authorization'] = null;
            /*if setting null does not remove `Authorization` header then try     
              delete axios.defaults.headers.common['Authorization'];
            */
            delete axios.defaults.headers.common['Authorization'];
        }
    }

    get(url, params = {}) {
        return this.axiosInstance.get(url, params).then(data => {
            return [null, data]
        }).catch(err => {
            return [err.response, null]
        })
    }

    post(url, params) {
        return this.axiosInstance.post(url, params).then(data => {
            return [null, data]
        }).catch(err => {
            return [err.response, null]
        })
    }

    put(url, params) {
        return this.axiosInstance.put(url, params).then(data => {
            return [null, data]
        }).catch(err => {
            return [err.response, null]
        })
    }

    delete(url, params = {}) {
        return this.axiosInstance.delete(url, params).then(data => {
            return [null, data]
        }).catch(err => {
            return [err.response, null]
        })
    }

}


export default ServiceAxios 