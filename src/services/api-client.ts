import axios, { AxiosRequestConfig } from "axios";
import Cookies from 'universal-cookie'

export interface FetchResponse<T> {
    results: T[];
  }

  const getToken = () => {
    const cookies = new Cookies();
    const token = cookies.get("rzd_auth_token")
    return token;

}

const clientInstance = axios.create({
    baseURL: "http://localhost:8080/api/",
    headers: {
        "x-auth-token": getToken()
    }
})

class ApiClient<T> {
    endpoint: string;
    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }
    getAll = (config?: AxiosRequestConfig) => clientInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data);
    getSingle = (config?: AxiosRequestConfig) => clientInstance.get<T>(this.endpoint, config).then(res => res.data);
    putSingle = (config?: AxiosRequestConfig) => clientInstance.post<T>(this.endpoint, config).then(res => res.data);
    post = (config?: AxiosRequestConfig) => clientInstance.post<T>(this.endpoint, config).then(res => res.data);
    postSingle = (config?: AxiosRequestConfig) => clientInstance.post<T>(this.endpoint, config).then(res => res.data);
    static signUpUser = (config?: AxiosRequestConfig) => clientInstance.post<{"x-auth-token": string}>("/users", config);
    static loginUser = (config?: AxiosRequestConfig) => clientInstance.post<{"x-auth-token": string}>("/auth", config);
}

export default ApiClient;