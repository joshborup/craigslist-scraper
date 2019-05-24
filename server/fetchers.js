const $ = require("cheerio");
const axios = require("axios");

module.exports = {
  getCraigsListData(url) {
    return axios.get(url).then(html => {
      return $(".result-row", html.data)
        .toArray()
        .map(function(elem, i) {
          return {
            name: $(elem)
              .find(".result-title")
              .html(),
            price: $(elem)
              .find(".result-price")
              .html(),
            url: $(elem)
              .find("a")
              .attr("href"),
            date: $(elem)
              .find(".result-date")
              .attr("datetime")
              .split(" ")[0],
            time: $(elem)
              .find(".result-date")
              .attr("datetime")
              .split(" ")[1],
            location: $(elem)
              .find(".result-hood")
              .text()
              .trim()
              .replace(/[()]/g, ""),
            image: $(elem)
              .find(".gallery")
              .data().ids
              ? `https://images.craigslist.org/${
                  $(elem)
                    .find(".gallery")
                    .data()
                    .ids.split(",")[0]
                    .split(":")[1]
                }_600x450.jpg`
              : null
          };
        });
    });
  }
};
