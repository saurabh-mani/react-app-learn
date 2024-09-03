import React, { useState } from "react";
//import { MouseEvent } from "react";

function ListGroup() {
  let items = ["Java", "C++", "C", "C#", "PHP", "ASP.NET"];
  //let selectedIndex = -1;
  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //items = [];
  /*
  //Event Handler
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };*/
  return (
    <>
      <h1>List</h1>
      {items.length == 0 && <p>No Items Found...</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
