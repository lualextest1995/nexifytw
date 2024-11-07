const dateFormatterHelper = (date) => {
  // 將所有的日期格式轉換成 yyyy-mm-dd
  const d = new Date(date)
  const year = d.getFullYear()
  const month = d.getMonth() + 1
  const day = d.getDate()
  const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`
  return formattedDate
}

export default dateFormatterHelper
