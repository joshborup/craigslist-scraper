module.exports = {
  filters: (data, db, id) => {
    return db.check_filters(id).then(response => {
      if (response.length) {
        return data.filter(elem => {
          for (let i = 0; i < response.length; i++) {
            if (elem.name.toLowerCase().includes(response[i].filter))
              return true;
          }
        });
      } else {
        return data;
      }
    });
  }
};
