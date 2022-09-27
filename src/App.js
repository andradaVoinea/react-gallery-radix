import React from "react";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

function Header() {
  return (
    <ul>
      <li>Home</li>
      <li>Contact</li>
    </ul>
  );
}

function App() {
  const [imgUrl, setImgUrl] = React.useState("");
  const [fetching, setFetching] = React.useState(false);
  async function fetchImage() {
    setFetching(true);
    const response = await fetch("https://picsum.photos/400/400");
    setFetching(false);
    setImgUrl(response.url);
  }
  React.useEffect(() => {
    // console.log some random number to see if we double our renders
    console.log(Math.random());
    fetchImage();
  }, []);
  return (
    <div className="container" style={{ backgroundImage: `url("${imgUrl}")` }}>
      {fetching ? (
        <MoonIcon className="main-icon" />
      ) : (
        <SunIcon className="main-icon" onClick={() => fetchImage()} />
      )}
    </div>
  );
}

export default App;
