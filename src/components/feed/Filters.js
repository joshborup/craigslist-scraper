import React, { useState } from "react";
import fetchData from "../Hooks/FetchData";
import axios from "axios";
export default function Filters() {
  const data = fetchData("/api/filters");
  const [updateData, setUpdateData] = useState([]);
  function postFilter(filter) {
    axios.post(`/api/filters?filter=${filter}&id=${1}`);
  }

  function deleteFilter(filter) {
    axios.delete(`/api/filters?filter=${filter}&id=${1}`).then(response => {
      setUpdateData(response.data);
    });
  }
  const mappedFilters = updateData.length
    ? updateData.map(filter => {
        return (
          <div>
            {filter.filter}
            <button onClick={() => deleteFilter(filter.filter)}>Delete</button>
          </div>
        );
      })
    : data.map(filter => {
        return (
          <div>
            {filter.filter}
            <button onClick={() => deleteFilter(filter.filter)}>Delete</button>
          </div>
        );
      });
  return mappedFilters;
}
