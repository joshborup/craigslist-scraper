module.exports = {
  readAll: (req, res) => {
    const db = req.app.get("db");
    db.get_items().then(items => {
      if (items.length) {
        res.status(200).json(items);
      } else {
        res.status(200).json([
          {
            category: "misc",
            date: "2019-02-20T07:00:00.000Z",
            image:
              "https://ssle.ulximg.com/image/750x750/cover/1537651242_dc208b9a4dd9bc2bdedfcb73237d2608.jpg/b67940d56290ca29ad2dc9ee78a017ef/1537651242_aebb9537d8d2f6b4a9106ec137d3e7b4.jpg",
            item_id: 1,
            location: "Phoenix",
            name: "Nothing found yet",
            price: "$0",
            time: "13:26",
            url:
              "https://ssle.ulximg.com/image/750x750/cover/1537651242_dc208b9a4dd9bc2bdedfcb73237d2608.jpg/b67940d56290ca29ad2dc9ee78a017ef/1537651242_aebb9537d8d2f6b4a9106ec137d3e7b4.jpg"
          }
        ]);
      }
    });
  },
  readById: (req, res) => {
    res.status(200).json("this endpoint is still a work in progress");
  },
  post: (req, res) => {
    res.status(200).json("this endpoint is still a work in progress");
  },
  put: (req, res) => {
    res.status(200).json("this endpoint is still a work in progress");
  },
  delete: (req, res) => {
    res.status(200).json("this endpoint is still a work in progress");
  }
};
