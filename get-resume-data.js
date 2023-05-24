const fs = require("fs");
const fetch = require("axios");
const dotenv = require("dotenv");

// .env 파일 로드 + Node 환경에서 가능한 env.local을 사용하도록 설정함
dotenv.config({ path: ".env.local" });
console.log("start get-resume-data Node");

const formatToObject = (str) => {
  // 스프레드 시트의 CSV 파일로 가져온 데이터를 분리하여 사용.
  const dataList = str.replace(/"/g, "").split("\r\n");

  const res = {};
  for (let i = 1; i < dataList.length; i++) {
    const [key, value] = dataList[i].split(",,");

    res[key] = value.replace(/\\n/g, "\n");
  }
  return res;
};

const saveFile = (str) => {
  const res = formatToObject(str);
  fs.writeFileSync(
    "./src/config/resume-data.js",
    `export const contents = ${JSON.stringify(res, null, 2)};\n`
  );
};

const URL = `${process.env.URL}/export?format=csv`;

fetch(URL)
  .then((res) => res.data)
  .then(saveFile)
  .catch((err) => {
    console.error(`get-resume-data fetch error : ${err}`);
  });
