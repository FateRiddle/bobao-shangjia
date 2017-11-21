//
//update duration
export const duration = 15000

//转换为api接受的时间参数 1990-01-01
export const formatNow = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const _day = date.getDate()
  const day = _day < 10 ? '0' + _day : _day
  return year + '-' + month + '-' + day
}

export const formatYesterday = () => {
  const date = new Date()
  date.setDate(date.getDate() - 1)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const _day = date.getDate()
  const day = _day < 10 ? '0' + _day : _day
  return year + '-' + month + '-' + day
}

export const formatTime = time => {
  const two = d => (d.length > 1 ? d : '0' + d)
  if (time) {
    const y = time.substring(0, 4)
    const _m = time.substring(5, 7)
    const m = two(_m)
    const _d = time.substring(8, 10)
    const d = two(_d)
    const _h = time.substring(11, 13)
    const h = two(_h)
    const _mi = time.substring(14, 16)
    const mi = two(_mi)
    const _s = time.substring(17, 19)
    const s = two(_s)
    return [y + '年' + m + '月' + d + '日', h + '时' + mi + '分' + s + '秒']
  }
  return ['2017年11月11日', '00时00分00秒']
}

//为了显示现在时间
export const getNow = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const _day = date.getDate()
  const day = _day < 10 ? '0' + _day : _day
  const _hour = date.getHours()
  const hour = _hour < 10 ? '0' + _hour : _hour
  const _minute = date.getMinutes()
  const minute = _minute < 10 ? '0' + _minute : _minute
  const _second = date.getSeconds()
  const second = _second < 10 ? '0' + _second : _second
  return [year + '年' + month + '月' + day + '日', hour + ':' + minute + ':' + second]
}

//1000000 => '1,000,000'
export const formatNum = number => {
  const num = typeof number === 'number' ? number.toString() : number
  return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

// 一个数组中最大的数
export const getMax = arr => {
  let max = 0
  arr.forEach(x => {
    if (x > max) {
      max = x
    }
  })
  return max
}

//显示九位数据 123456 => '000123456'
export const formatDigit = num => {
  const sum = typeof num !== 'string' ? num.toString() : num
  const len = sum.length
  let newStr = sum
  for (let i = 0; i < 9 - len; i++) {
    newStr = '0' + newStr
  }
  return newStr
}

const _getArr = (a, b) => new Array(b - a + 1).fill(0).map((i, index) => a + index)

export const getArr = (a, b) => {
  if (a === b) {
    return [a]
  }
  if (a < b) {
    return _getArr(a, b)
  }
  if (a > b) {
    return [..._getArr(a, 9), ..._getArr(0, b)]
  }
}
