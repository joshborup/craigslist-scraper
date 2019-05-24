const express = require("express");
const app = express();
const massive = require("massive");
const pC = require("./controllers/populate");
const products = require("./controllers/products");
const filters = require("./controllers/filters");
const craigslistKey = require("./key");
const server = require("http").createServer(app);
const io = require("socket.io")(server);
require("dotenv").config();
const categories = Object.keys(craigslistKey);
let myDb;

massive(process.env.CONNECTION_STRING).then(db => {
  console.log("connected to db");
  app.set("db", db);
  myDb = db;
  db.init();
});

app.route("/api/craigs_list").get(products.readAll);
app
  .route("/api/filters")
  .get(filters.getById)
  .post(filters.postFilters)
  .delete(filters.deleteFilters);

io.sockets.on("connection", socket => {
  setInterval(() => {
    for (let key in categories) {
      pC.populateDb(myDb, categories[key]);
    }
    myDb.get_items().then(response => {
      if (response.length) {
        socket.emit("craigs_data", response);
      } else {
        socket.emit("craigs_data", [
          {
            category: "computers",
            date: "2019-02-20T07:00:00.000Z",
            image:
              "https://images.craigslist.org/00e0e_3Xyfbwui5rQ_600x450.jpg",
            item_id: 1,
            location: "Phoenix",
            name:
              "Dell OptiPlex 7010 Desktop i5 Quad-Core 8GB Ram Windows 10 Office 2016",
            price: "$200",
            time: "13:26",
            url:
              "https://phoenix.craigslist.org/nph/sys/d/phoenix-dell-optiplex-7010-desktop-i5/6822216223.html"
          }
        ]);
      }
    });
  }, 1000 * 10);
});

const PORT = 4000;
server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
