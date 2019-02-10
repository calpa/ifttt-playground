const axios = require("axios");
const cheerio = require("cheerio");

const url = "http://rss.weather.gov.hk/rss/CurrentWeather.xml";

/**
 * 解析原始 XML 格式
 * @param {string} data - Raw XML
 */
const parseXML = data => {
  const $ = cheerio.load(data, {
    xmlMode: true
  });
  const weather = $("description")
    .slice(1, 2)
    .text();

  const $$ = cheerio.load(weather);
  const items = [];
  $$("table")
    .find("td")
    .each(function(index, element) {
      if (index % 2) {
        return;
      }
      const area = $$(element).text();
      const degree = $$(element)
        .next()
        .text()
        .split(" ")[0];

      const item = {
        area,
        degree
      };
      items.push(item);
    });
  return items;
};

module.exports = async () => {
  const { data } = await axios.get(url);
  return parseXML(data);
};
