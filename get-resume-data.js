const fs = require("fs");
const fetch = require("axios");

const clean = (str) => {
  const res = str.trim().replace(/\r/g, "");
  return res;
};

const URL =
  "https://docs.google.com/spreadsheets/d/1NJV7BGxNxt2qliE6fuKYXoIGLf-FeidQKDRCq3uPlvM/export?format=csv";

fetch(URL)
  .then((res) => res.data)
  .then((res) => console.log(res, 2222222222));
