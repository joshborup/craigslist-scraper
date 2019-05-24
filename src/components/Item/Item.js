import React, { useState, useEffect } from "react";
import SwipableViews from "react-swipeable-views";
import FetchData from "../Hooks/FetchData";
import socketIOClient from "socket.io-client";
import axios from "axios";
const socket = socketIOClient("http://localhost:4000"); //development;

export default function Item({ itemKey }) {
  const [filteredCraigsData, setFilteredCraigsData] = useState([]);
  socket.on("craigs_data", data => {
    console.log(data);
    setFilteredCraigsData(data);
  });

  useEffect(() => {
    if (filteredCraigsData.length == []) {
      axios.get("/api/craigs_list").then(response => {
        console.log("response ======", response);
        setFilteredCraigsData(response.data);
      });
    }
  });
  console.log(filteredCraigsData);
  const mappedCraigsList = filteredCraigsData
    .map(item => {
      if (item.image) {
        return (
          <div className="card" key={item.image + item.url + item.name}>
            <div>
              <img src={item.image} />
            </div>
            <div className="item-meta">
              <a href={item.url}>
                <span className="item-name">{item.name}</span>
              </a>
              <span>{item.price}</span>
            </div>
          </div>
        );
      }
    })
    .filter(elem => elem != null);

  return mappedCraigsList;
}
