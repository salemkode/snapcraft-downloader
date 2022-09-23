function AppInfo({ app }) {
  return (
    <div className="container">
      <div className="align-items-center card flex-row mt-4 py-3 px-4">
        <img
          src={app.details.icon}
          alt=""
          width="80"
          height="80"
          className="me-4"
        />
        <div>
          <h2>{app.details.title}</h2>
          <h5>{app.details.publisher}</h5>
        </div>
        <a
          className="ms-auto"
          target="_blank"
          rel="noreferrer"
          href={"https://snapcraft.io/" + app.details.name}
        >
          see in store
        </a>
      </div>
    </div>
  );
}

export default AppInfo;
