/* eslint-disable no-useless-escape */
import _ from 'lodash';
import moment from 'moment-timezone';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const formatToYYMMDD = 'YYYY-MM-DD';
export const formatToYYMMDDHHmmWithComma = 'YYYY-MM-DD, HH:mm';
export const formatToYYMMDDHHmm = 'YYYY-MM-DD HH:mm';
export const formatToYYMMDDHHmmss = 'YYYY-MM-DD HH:mm:ss';
export const formatToYYMMDDTHHmmss = 'YYYY-MM-DDTHH:mm:ss';
export const formatToMMMDDHHmm = 'MMM-DD HH:mm';
export const formatToYYMMDDTHHmmssWith8 = 'YYYY-MM-DDTHH:mm:ss+08:00';
export const formatToYYMMDDHHmmssFileName = 'YYYYMMDD-HHmmss';
export const formatToYYMMDDFileName = 'YYYYMMDD';

export const formatRouteDate = str => {
  if (_.isEmpty(str)) return '';
  let date = new Date(str);
  let month = date.getMonth();
  let day = date.getDate();
  day = day > 9 ? day : `0${day}`;
  return `${day} ${MONTHS[month]}`;
};

export const getIntervalDayByFormat = (date1, date2, format) => {
  if (!date1 || !date2) return 0;
  // default format
  let formatStr = formatToYYMMDDHHmmWithComma;
  if (format) formatStr = format;
  let fromDate = moment(date1, formatStr).toDate();
  let toDate = moment(date2, formatStr).toDate();
  var days = (toDate.getTime() - fromDate.getTime()) / (1000 * 60 * 60 * 24);
  days = Math.round(days * 10) / 10;
  return Math.abs(Math.floor(days));
};

export const newDate = format => {
  return format ? moment().format(format) : moment().format(formatToYYMMDDHHmmss);
};

export const formatDateWithTimeZone = str => {
  if (_.isEmpty(_.toString(str))) {
    return '';
  }
  return `${moment(str).format(formatToYYMMDDHHmmWithComma)} (${tzAbbr()})`;
};

// TODO:
export const formatGMTDateWithComma = dateStr => {
  let date = dateStr;
  if (_.isEmpty(dateStr)) {
    date = new Date();
  }
  return moment(date).utcOffset(0).format(formatToYYMMDDHHmmWithComma);
};

// TODO:
export const formatEtaDate = dateStr => {
  if (dateStr) {
    return moment(dateStr).utcOffset(0).format('MMM DD, YYYY, h:mm a');
  }
  return '';
};

export const formatToLocalDate = dateStr => {
  return moment(dateStr).format(formatToYYMMDDHHmmWithComma);
};
/**
 *
 * @param dateStr - standard date with timezone as 2018-03-09T10:46:27Z or 2018-03-09T18:46:27+08:00
 * @param format
 * @returns {string}
 */
export const format2LocalStr = (dateStr, format) => {
  if (!dateStr) {
    return '';
  }
  return moment(dateStr).format(format);
};
// TODO:
export const formatGMTToLocalDate = (dateStr, format) => {
  let date = dateStr;
  if (_.isEmpty(_.toString(dateStr))) {
    date = new Date();
  }
  return moment(date).utcOffset(8).format('YYYY-MM-DDTHH:mm:ssZ');
};
// TODO:
export const getCurrentLocalDateAndTime = () => {
  return moment().format('YYYYMMDDHHmm');
};
export const getCurrentLocalDate = () => {
  return moment().format('YYYY-MM-DD');
};
// TODO:
export const formatToGMTDate = dateStr => {
  if (_.isEmpty(_.toString(dateStr))) {
    return null;
  }
  return moment(dateStr).utcOffset(0).format(formatToYYMMDDHHmmWithComma);
};

export const formatToGMTDateStr = dateStr => {
  if (_.isEmpty(_.toString(dateStr))) {
    return null;
  }
  return moment(dateStr).utcOffset(0).format(formatToYYMMDDHHmm);
};

export const formatStrToGMTDate = dateStr => {
  if (_.isEmpty(_.toString(dateStr))) {
    return null;
  }
  return moment(dateStr).utcOffset(0).toDate();
};

export const formatGMTDateDisplayFormat = dateStr => {
  if (_.isEmpty(_.toString(dateStr))) {
    return '';
  }
  return moment(dateStr).format(formatToYYMMDDHHmmWithComma);
};

export const formatDateWithDisplayFormat = ({dateStr, format}) => {
  if (_.isEmpty(_.toString(dateStr))) {
    return '';
  }
  return moment(dateStr).format(format || formatToYYMMDDHHmmss);
};

export const formatDateStrToGMTDateWithYYMMDDHHmmss = dateStr => {
  if (_.isEmpty(_.toString(dateStr))) {
    return '';
  }
  return moment(dateStr).utcOffset(0).format(formatToYYMMDDHHmmss);
};

export const addHoursAndFormatToGMTWith8 = (dateStr, hours) => {
  let _dateStr = dateStr;
  if (_.isEmpty(_.toString(dateStr))) {
    _dateStr = new Date();
  }
  return `${moment(_dateStr).add(hours, 'hours').utcOffset(8).format(formatToYYMMDDTHHmmss)}+08:00`;
};

export const formatToLocalDateStrWith8 = dateStr => {
  let _dateStr = dateStr;
  if (_.isEmpty(_.toString(dateStr))) {
    _dateStr = new Date();
  }
  return moment(_dateStr).utcOffset(8).format(formatToYYMMDDTHHmmssWith8);
};

export const addHoursAndFormat = (dateStr, hours, fromat) => {
  if (_.isEmpty(_.toString(dateStr))) {
    return null;
  }
  return `${moment(dateStr).add(hours, 'hours').utcOffset(8).format(fromat)}`;
};

export const formatGMTDateWithDisplayFormat = (dateStr, format) => {
  let _dateStr = dateStr;
  if (_.isEmpty(_.toString(dateStr))) {
    _dateStr = new Date();
  }
  return moment(_dateStr).utcOffset(0).format(format);
};

export const formatToDateStringWith8 = formatToLocalDateStrWith8;

export const formatDate = ({date, format}) => {
  return moment(date).format(format);
};

export const formatDateToGlobalStr = (date, format) => {
  return moment(date).format(format || formatToYYMMDDHHmmWithComma);
};

export const format2DateType = dateStr => {
  return moment(dateStr).utcOffset(0).toDate();
};

export const format2LocalDate = dateStr => {
  const minutesOffset = new Date().getTimezoneOffset();
  return moment(dateStr).add(minutesOffset, 'minutes').toDate();
};

export const formatDateStrToMilliscond = dateStr => {
  return new Date(dateStr).getTime();
};

export const minsConvertHours = ({mins}) => {
  const minutes = parseInt(mins % 60) > 0 ? `${parseInt(mins % 60)} mins` : '';

  // const hours = parseInt(mins / 60) > 0 ? `${parseInt(mins / 60)} hrs` : '';
  const hours = parseInt(mins / 60) > 0 ? parseInt(mins / 60) : 0;
  const days = hours >= 24 ? `${parseInt(hours / 24)} days` : '';

  const _hours = parseInt(hours % 24) > 0 ? `${parseInt(hours % 24)} hrs` : '0 hrs';
  return (`${days} ${_hours} ${minutes}`).trim();
};

export const minsConvertDays = ({mins}) => {
  let minutes = parseInt(mins % 60);
  let hours = minutes > 30 ? 1 : 0;
  hours += parseInt(mins / 60);
  if (hours <= 1) {
    return `${hours}{hr}`;
  }
  else if (hours < 24) {
    return `${hours}{hrs}`;
  }
  else {
    let days = parseInt(hours / 24);
    hours = hours % 24;
    let hourStr = hours === 0 ? '' : hours === 1 ? `${hours}{hr}` : `${hours}{hrs}`;
    return days <= 1 ? `${days}{day} ${hourStr}` : `${days}{days} ${hourStr}`;
  }
};

export const dateSubtraction = (date, dayNumber) => {
  return moment(_.toString(date)).subtract(dayNumber, 'days').format(formatToYYMMDDHHmmss);
};

export const dateIncrease = (date, dayNumber) => {
  return moment(date).add(dayNumber, 'days').toDate();
};

export const tzAbbr = function () {
  let tzName = moment.tz.guess();
  let abbr = moment.tz(tzName).zoneAbbr();
  return abbr;
};

export const getStartDate = ({date = new Date(), daysAgo = 0}) => {
  return moment(date).add(-daysAgo, 'days').startOf('date').toDate();
};

export const getEndOfDate = date => {
  return moment(date).endOf('date').toDate();
};

// TODO:
export const excelNewDateName = () => {
  return moment().format('YYYYMMDD-HHmmss');
};

export const getHumanDurationObj = (d1, d2) => {
  let diff = Math.abs(d1.getTime() - d2.getTime());
  let nd = 1000 * 24 * 60 * 60;
  let nh = 1000 * 60 * 60;
  let nm = 1000 * 60;
  let day = parseInt(diff / nd);
  let hour = parseInt((diff % nd) / nh);
  let min = parseInt(((diff % nd) % nh) / nm);
  return {day, hour, min};
};
export const getHumanDuration = (d1, d2) => {
  let {day, hour, min} = getHumanDurationObj(d1, d2);
  let result = '';
  if (day > 0) {
    let dayStr = 'day';
    if (day > 1) {
      dayStr = 'days';
    }
    result += `${day} ${dayStr} `;
  }
  if (hour > 0) {
    let hourStr = 'hr';
    if (hour > 1) {
      hourStr = 'hrs';
    }
    result += `${hour} ${hourStr} `;
  }
  if (min > 0) {
    let minStr = 'min';
    if (min > 1) {
      minStr = 'mins';
    }
    result += `${min} ${minStr} `;
  }
  return result.trim();
};

export const getDurationMinutes = function (d1, d2) {
  let diff = Math.abs(d1.getTime() - d2.getTime());
  let nm = 60 * 1000;
  return parseInt(diff / nm);
};

// TODO:
export const handleCommonFormat = dateStr => {
  return _.replace(_.toString(dateStr), ',', '');
};
export const forceDate2GMT = date => {
  date = new Date(date);
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  return date;
};
