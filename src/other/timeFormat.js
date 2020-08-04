import dateFormat from 'dateformat';

function convertPDTToLocalTime(timeStr) {
  if (!timeStr) {
    return
  }
  if (timeStr.indexOf("PDT") !== -1) {
    const date = new Date(timeStr);
    console.log(dateFormat(date, "yyyy-MM-dd"));
  }
}

convertPDTToLocalTime("2020-07-22 20:22:14 PDT")