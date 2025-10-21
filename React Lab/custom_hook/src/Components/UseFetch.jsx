import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!url) return;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error("Fetch error:", error);
        setData(null);
      });
  }, [url]);
  return [data];
};

export default useFetch;

/*
useEffect: This is a React Hook used for performing side effects in functional components. It’s typically used for fetching data, subscribing to events, or any other side effects that don’t involve rendering.
fetch(url): This initiates an HTTP request to the specified url.
.then((res) => res.json()): This converts the response from the server to JSON format.
.then((data) => setData(data)): This sets the retrieved data to the state variable data. setData is a function that updates the state in React functional components.

 */
