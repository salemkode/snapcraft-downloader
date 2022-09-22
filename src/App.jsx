// Components
import SearchList from "./components/SearchList";
import SearchBar from "./components/SearchBar";
import AppInfo from "./components/AppInfo";
import Loading from "./components/Loading";

// Image
import snapcraft from "./assets/snapcraft.png";
import notFound from "./assets/404.svg";
import welcome from "./assets/welcome.svg";

// Hooks
import { useState } from "react";
import Download from "./components/Download";

//
function App() {
  // Define status of app
  // enum status
  const status = {
    welcome: 0,
    loading: 1,
    notFound: 2,
    showApp: 3,
    search: 4,
  };
  const [state, setState] = useState(status.welcome);
  const [appInfo, setAppInfo] = useState({});
  const [searchList, setSearchList] = useState([]);

  //
  async function search(query) {
    // Go to welcome screen when search empty
    if (!query) {
      setState(status.welcome);
      return;
    }

    // Start loading
    setState(status.loading);

    // Get list of search from api
    const response = await fetch("http://localhost:8000/snap/search/" + query);
    const searchList = await response.json();

    // Check is status of request
    if (response.status === 200) {
      // Add result of search in state
      setSearchList(searchList);

      // Change content to search list
      setState(status.search);
    } else {
      setState(status.notFound);
    }
  }

  //
  async function selectApp(title) {
    // Start loading
    setState(status.loading);

    // Get list of search from api
    const response = await fetch(
      "http://localhost:8000/snap/download/" + title
    );
    const appInfo = await response.json();

    // Check is status of request
    if (response.status === 200) {
      // Add result of search in state
      setAppInfo(appInfo);

      // Change content to search list
      setState(status.showApp);
    } else {
      setState(status.notFound);
    }
  }

  //
  let content;
  if (state === status.welcome) {
    content = (
      <div className="container py-5">
        <img
          src={welcome}
          alt=""
          style={{ maxHeight: "355px" }}
          className="w-50 d-block m-auto"
        />
        <h2 className="text-center">
          Easy way to get .snap file of snapcraft store
        </h2>
        <h6 className="mt-4"> And install it with this command</h6>
        <code className="bg-dark text-white py-3 px-3 d-block rounded-2">
          $ sudo snap install /path/to/my-snap.snap --dangerous
        </code>
      </div>
    );
  } else if (state === status.loading) {
    content = <Loading />;
  } else if (state === status.showApp) {
    content = <>
      <AppInfo app={appInfo} />;
      <Download download={appInfo.download} />
    </>
  } else if (state === status.search) {
    content = <SearchList list={searchList} onSelect={selectApp} />;
  } else if (state === status.notFound) {
    content = (
      <div className="container py-5">
        <img src={notFound} alt="" className="w-75 d-block m-auto" />
        <span className="mt-1">Not found</span>
      </div>
    );
  }

  //
  return (
    <div className="app">
      <header className="d-flex justify-content-center align-items-center mt-5 py-3">
        <h4>Snapcraft downloader</h4>
        <img
          src={snapcraft}
          className="ms-3"
          alt="logo"
          width="60"
          height="60"
        />
      </header>

      {/**/}
      <SearchBar onChange={search} />

      {/**/}
      {content}
    </div>
  );
}

export default App;
