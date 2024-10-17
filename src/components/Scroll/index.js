import { useEffect, useState } from "react";
import ImagesContainer from "./image-container";

const STATE = {
  loading: "loading",
  error: "error",
  success: "success",
};

const ScrollContainer = () => {
  const [status, setStatus] = useState("loading");
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await (
          await fetch(`https://dummyjson.com/products?limit=3&skip=${offset}`)
        ).json();
        setProducts(response?.products);
        setStatus("success");
      } catch (e) {
        setStatus("error");
      }
    };
    fetchProduct();
  }, [offset]);

  return (
    <div className="scroll-container">
      {STATE.loading === status && <h3>Loading...</h3>}
      {STATE.error === status && <h3>Error</h3>}
      {STATE.success === status && (
        <ImagesContainer setOffset={setOffset} images={products} />
      )}
    </div>
  );
};

export default ScrollContainer;
