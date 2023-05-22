const fs = require("fs");
const fetch = require("axios");

const formatToObject = (str) => {
  // 스프레드 시트의 CSV 파일로 가져온 데이터를 분리하여 사용.
  const dataList = str.split("\r\n");
  const res = {};
  for (let i = 1; i < dataList.length; i++) {
    const [key, value] = dataList[i].split(",");
    res[key] = value;
  }
  console.log(res);
  return res;
};

const URL =
  // "https://docs.google.com/spreadsheets/d/1OYMSlIgjbmzf0OBME_IhhQgeCH7wP52E3QNKc7b2xV0/export?format=csv";

  "https://docs.google.com/spreadsheets/d/1iDBSJ0eyTs3i4NWOc0sC6uyd0niEkwJynoWWLSMCa1E/export?format=csv";

fetch(URL)
  .then((res) => res.data)
  .then(formatToObject);
