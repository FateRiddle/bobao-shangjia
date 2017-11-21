import axios from 'axios'
// const API_ROOT = 'http://localhost:3000/data'
const API_ROOT = 'http://61.164.47.179:5080/remote/rest'

//setting up request
const request = axios.create({
  baseURL: API_ROOT,
})

const responseBody = res => res.data.rows

const ax = {
  get: body => request.get('', { params: { ...body, islogin: 1 } }).then(responseBody),
}

// const ay = {
//   get: url => axios.get(`http://localhost:3000/data/${url}`).then(res => res.data),
// }

export const getQudao = () => ax.get({ proc: 'PROC_REPORT_ORDER_TYPE_BOARD' })
export const getTotal = () => ax.get({ proc: 'PROC_REPORT_ORDER_TYPE_BOARD_SUM' })
export const getCityTotal = () =>
  ax.get({ proc: 'PROC_REPORT_ORDER_TYPE_BOARD_CITY_NUM' })
export const get3lv = date => ax.get({ proc: 'PROC_REPORT_ORDER_TYPE_BOARD_RATE', date })
export const getTpBtn = () => ax.get({ proc: 'PROC_REPORT_ORDER_TYPE_BOARD_TOP_RATE' })
