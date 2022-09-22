import { useState } from "react";

function SearchBar(props) {
  const [value, setValue] = useState(props.value || "");

  function keyUp(event) {
    if (event.key === "Enter" || event.keyCode === 13) {
      props.onChange(value);
    }
  }

  // Render
  return (
    <div className="container d-flex">
      <div className="input-group mb-3">
        <input
          type="text"
          placeholder="search to package"
          className="form-control"
          value={value}
          onInput={(e) => setValue(e.target.value)}
          onKeyUp={keyUp}
        />
        <button
          className="btn btn-outline-secondary"
          onClick={() => props.onChange(value)}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
