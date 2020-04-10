import axios from 'axios'

const API_HOST = 'http://localhost:3000'


axios.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded'

// 请求拦截器
axios.interceptors.request.use(
    function(config) {
        return config
    },
    function(error) {
        return Promise.reject(error)
    }
)

// 响应拦截器
axios.interceptors.response.use(
    function(response) {
        return response
    },
    function(error) {
        return Promise.reject(error)
    }
)

export async function toLogin(params) {
   const data= await axios.post(`${API_HOST}/toLogin`, params, { headers: { 'Content-Type': 'application/json' } })
   return data.data;
}
export async function toRegister(params) {
    await axios.post(`${API_HOST}/toRegister`, params, { headers: { 'Content-Type': 'application/json' } })
}

// export async function getUnHandleInfo() {

//     const { data } = await axios.post(`${API_HOST}/risk-insight/personTrack/getListPersonTrack1`, { headers: { 'Content-Type': 'application/json' } })
//     console.log("data", data);
//     // return data.data
// }