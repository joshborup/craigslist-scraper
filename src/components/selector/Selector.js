import React from "react";

export default function Selector({ changeHandler }) {
  return (
    <div className="selector">
      <select onChange={e => changeHandler(e.target.value)}>
        <option value="computers">Computers</option>
        <option value="furniture">Furniture</option>
        <option value="computerParts">Computer Parts</option>
        <option value="carAndTruck">Cars And Trucks</option>
        <option value="antiques">Antiques</option>
      </select>
    </div>
  );
}
