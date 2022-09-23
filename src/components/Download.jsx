export default function Download(props) {
  const DownloadList = Object.keys(props.download).map((key) => {
    const linkList = Array.from(props.download[key]);
    return (
      <div className="col mt-4">
        <h4 className="text-center mb-3">{key}</h4>
        <div className="list-group">
          {linkList.map((item) => (
            <div
              key={item.url}
              type="button"
              className="list-group-item list-group-item-action d-flex justify-content-between"
              aria-current="true"
              href={item.url}
            >
              <span>{item.name}</span>
              <span>{item.size}</span>
            </div>
          ))}
        </div>
      </div>
    );
  });

  // Render
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {DownloadList}
      </div>
    </div>
  );
}
