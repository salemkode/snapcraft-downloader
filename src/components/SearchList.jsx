function SearchItem(props) {
  console.log(props);
  return (
    <button
      type="button"
      className="list-group-item list-group-item-action"
      onClick={() => props.onClick(props.item.name)}
    >
      <img
        src={props.item.icon}
        alt=""
        className="me-2"
        width="40"
        height="40"
      />
      {props.item.title}
    </button>
  );
}

export default function searchList(props) {
  return (
    <div className="container">
      <div className="list-group">
        {props.list.map((item) => (
          <SearchItem
            item={item}
            key={item.title}
            onClick={props.onSelect}
          />
        ))}
      </div>
    </div>
  );
}
