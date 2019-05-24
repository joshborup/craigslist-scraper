const moment = require("moment");
const fetchers = require("../fetchers");
const craigslistKey = require("../key");
const filters = require("../filters");
const userId = 1;
module.exports = {
  populateDb: (db, key) => {
    fetchers
      .getCraigsListData(craigslistKey[key])
      .then(data => {
        if (data.length) {
          filters.filters(data, db, userId).then(filteredData => {
            for (let i = 0; i <= filteredData.length - 1; i++) {
              const {
                name,
                price,
                url,
                date,
                time,
                location,
                image
              } = filteredData[i];
              db.create_item([
                name,
                price,
                url,
                moment(date).format("YYYY-MM-DD"),
                time,
                location,
                image,
                key
              ])
                .then(insertedData => {
                  return insertedData;
                })
                .catch(err => console.log(err));
            }
          });
        }
      })
      .catch(err => console.log(err));
  }
};
