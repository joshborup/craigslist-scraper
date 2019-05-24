module.exports = {
  postFilters: (req, res) => {
    const db = req.app.get("db");
    const { filter, id } = req.query;
    db.insert_into_filters([filter, id]).then(response => {
      res.status(200).json(response);
    });
  },
  deleteFilters: (req, res) => {
    const db = req.app.get("db");
    const { filter, id } = req.query;
    console.log(filter, id);
    db.delete_filter([filter, id]).then(response => {
      res.status(200).json(response);
    });
  },
  getById: (req, res) => {
    const db = req.app.get("db");
    db.check_filters(1).then(filters => {
      res.status(200).json(filters);
    });
  }
};
