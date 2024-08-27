import React from "react";
import { MouseEvent } from "react";

function ListGroup() {
  var items = ["Java", "C++", "C", "C#", "PHP", "ASP.NET"];
  //items = [];

  //Event Handler
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };
  return (
    <>
      <h1>List</h1>
      {items.length == 0 && <p>No Items Found...</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={item} className="list-group-item" onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
