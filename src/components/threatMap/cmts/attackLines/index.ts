import attackLines from './index.vue'
const calculateRecentHourArray = () => {
  const currentDate = new Date() // 获取当前时间
  const recentDate = new Date(currentDate.getTime() - 60 * 60 * 1000) // 计算最近一小时的时间

  const startTime = recentDate.getTime() // 最近一小时的起始时间戳
  const endTime = currentDate.getTime() // 当前时间的时间戳

  const interval = 5000 // 间隔为5秒
  const arrayLength = Math.floor((endTime - startTime) / interval) + 1 // 数组的长度为时间间隔内的次数加1

  const timeArray = [] // 存储时分秒的数组

  for (let i = 0; i < arrayLength; i++) {
    const currentTime = new Date(startTime + i * interval) // 根据间隔递增计算时间对象
    const hours = currentTime.getHours()
    const minutes = currentTime.getMinutes()
    const seconds = currentTime.getSeconds()

    const timeString =
      hours.toString().padStart(2, '0') +
      ':' +
      minutes.toString().padStart(2, '0') +
      ':' +
      seconds.toString().padStart(2, '0')
    timeArray.push(timeString)
  }

  return timeArray
}
const calculateRecentDayArray = () => {
  const currentDate = new Date() // 获取当前时间
  const recentDate = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000) // 计算最近一天的时间

  const startTime = recentDate.getTime() // 最近一天的起始时间戳
  const endTime = currentDate.getTime() // 当前时间的时间戳

  const interval = 2 * 60 * 1000 // 间隔为2分钟
  const arrayLength = Math.floor((endTime - startTime) / interval) + 1 // 数组的长度为时间间隔内的次数加1

  const timeArray = [] // 存储时分的数组

  for (let i = 0; i < arrayLength; i++) {
    const currentTime = new Date(startTime + i * interval) // 根据间隔递增计算时间对象
    const hours = currentTime.getHours()
    const minutes = currentTime.getMinutes()

    const timeString = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0')
    timeArray.push(timeString)
  }

  return timeArray
}
const calculateRecentMonthArray = () => {
  const currentDate = new Date() // 获取当前时间
  const recentDate = new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1000) // 计算最近一个月的时间

  const startTime = recentDate.getTime() // 最近一个月的起始时间戳
  const endTime = currentDate.getTime() // 当前时间的时间戳

  const interval = 60 * 60 * 1000 // 间隔为1小时
  const arrayLength = Math.floor((endTime - startTime) / interval) + 1 // 数组的长度为时间间隔内的次数加1

  const timeArray = [] // 存储时间字符串的数组

  for (let i = 0; i < arrayLength; i++) {
    const currentTime = new Date(startTime + i * interval) // 根据间隔递增计算时间对象
    const month = currentTime.toLocaleString('en', { month: 'short' }) // 获取月份的英文简写
    const day = currentTime.getDate() // 获取日期
    const hour = currentTime.getHours() // 获取小时

    const timeString = month + '' + day + ' ' + hour
    timeArray.push(timeString)
  }

  return timeArray
}

const getDataSecondNow = () => {
  const currentTime = new Date() // 根据间隔递增计算时间对象
  const hours = currentTime.getHours()
  const minutes = currentTime.getMinutes()
  const seconds = currentTime.getSeconds()

  const timeString =
    hours.toString().padStart(2, '0') +
    ':' +
    minutes.toString().padStart(2, '0') +
    ':' +
    seconds.toString().padStart(2, '0')

  return timeString
}
const getDataMinutes = () => {
  const currentTime = new Date() // 根据间隔递增计算时间对象
  const hours = currentTime.getHours()
  const minutes = currentTime.getMinutes()

  const timeString = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0')

  return timeString
}
const getDataHour = () => {
  const currentTime = new Date() // 根据间隔递增计算时间对象
  const month = currentTime.toLocaleString('en', { month: 'short' }) // 获取月份的英文简写
  const day = currentTime.getDate() // 获取日期
  const hour = currentTime.getHours() // 获取小时

  const timeString = month + '' + day + ' ' + hour
  return timeString
}
export const getXdata = (type: string) => {
  if (type === 'hour') {
    return calculateRecentHourArray()
  } else if (type === 'day') {
    return calculateRecentDayArray()
  } else {
    return calculateRecentMonthArray()
  }
}
export const getNewXData = (type: string) => {
  if (type === 'hour') {
    return getDataSecondNow()
  } else if (type === 'day') {
    return getDataMinutes()
  } else {
    return getDataHour()
  }
}
export default attackLines
