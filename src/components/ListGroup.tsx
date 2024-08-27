function ListGroup() {
  var items = ["Java", "C++", "C", "C#", "PHP", "ASP.NET"];
  items = [];
  var getMessage = () => {
    return items.length == 0 && <p>No Items Found...</p>;
  };
  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
