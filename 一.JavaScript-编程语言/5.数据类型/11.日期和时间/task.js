let today = new Date();

/**
 * 获取传入的日期是星期几
 * getDay() 获取一周中的第几天，从 0（星期日）到 6（星期六）
 * @param {*} date
 * @returns
 */
function getWeekDay(date) {
  let week = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

  return week[date.getDay()];
}
console.log(getWeekDay(today));

/**
 * 获取给定日期 date 往前 days 天是哪个月的哪一天
 * 使用 setDate 设置日期
 * @param {*} date
 * @param {*} days
 * @returns
 */
function getDateAgo(date, days) {
  let dateCopy = new Date(date);

  dateCopy.setDate(date.getDate() - days);

  return dateCopy.getDate();
}
console.log(getDateAgo(today, 2));


/**
 * 返回 month 月最后一天
 * new Date() 第三个参数 day 为 0 即为上一个月最后一天
 * @param {*} year
 * @param {*} month
 * @returns
 */
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}
console.log(getLastDayOfMonth(2020, 7));

/**
 * 返回今天已经过了多少秒
 *
 * @returns
 */
function getSecondsToday() {
  return today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();
}
console.log(getSecondsToday());


/**
 * 返回距离明天的秒数
 *
 * @returns
 */
function getSecondsToTomorrow() {
  let seconds = 24 * 3600;
  return seconds - getSecondsToday();
}