import { useState, useEffect } from "react";
import axios from "axios";
export default function FetchData(url) {
  let [data, setData] = useState([]);
  console.log(url);
  useEffect(() => {
    axios.get(url).then(response => {
      setData(response.data);
    });
  }, [url]);
  return data;
}
