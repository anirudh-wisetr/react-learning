import { useEffect, useRef, useState } from "react";
const STATE = {
  loading: "loading",
  error: "error",
  success: "success",
};

const Search = () => {
  const [value, setValue] = useState("");
  const [lists, setLists] = useState([]);
  const [status, setStatus] = useState("loading");

  let cacheRef = useRef({});

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    const fetchList = async () => {
      setStatus("loading");
      if (value.toLowerCase() in cacheRef.current) {
        setLists(cacheRef.current[value]);
        setStatus("success");
        return;
      }
      try {
        const response = await fetch(
          `https://dummyjson.com/products/search?q=${value}&limit=10`,
          { signal }
        );
        const data = await response.json();
        setLists(data.products);
        setStatus("success");
        cacheRef.current[value.toLowerCase()] = data.products;
      } catch (e) {
        if (e.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Fetch error:", e);
          setStatus("error");
        }
      }
    };

    const timer = setTimeout(fetchList, 800);

    return () => {
      clearTimeout(timer);
      abortController.abort();
    };
  }, [value]);

  return (
    <div className="list-wrapper">
      <input
        type={"text"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {status === STATE.error && <h3>SOmething went wrong</h3>}
      {status === STATE.loading && <h3>LOADING...</h3>}
      {status === STATE.success && lists.length === 0 && (
        <h3>No data found with result {value}</h3>
      )}
      {status === STATE.success && (
        <ul>
          {lists?.map(({ title = "", id = "" }) => {
            return <li key={id}>{title}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Search;

// NOTE:
// 1) Hum loading ke liye alag state banate hei, error ke liye alag.
// So instead of 2, make 1. And do condition basis like status === STATE.loading
// 2) abortContoller na karke dikha end mei keh karna hei to.
// Aur make sure to add AbortController on useeffect itself
// 3) Debounce through setTimeout & return. AND,
//  Caching through useRef because variable will update on re-render
