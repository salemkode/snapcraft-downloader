function SearchItem(props) {
  console.log(props);
  return (
    <button
      type="button"
      className="list-group-item py-3 list-group-item-action d-flex align-items-center"
      onClick={() => props.onClick(props.item.name)}
    >
      <img
        src={props.item.icon}
        alt=""
        className="me-4"
        width="50"
        height="50"
      />
      <h4 className="mb-0">{props.item.title}</h4>
    </button>
  );
}

export default function searchList(props) {
  return (
    <div className="container">
      <div className="list-group mb-5">
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
