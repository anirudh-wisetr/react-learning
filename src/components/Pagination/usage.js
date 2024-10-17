import { useEffect, useState } from "react";
import "./style.scss";
import Pagination from ".";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [offset, setOffset] = useState(1);

  const fetchProducts = async () => {
    const data = await (
      await fetch(`https://dummyjson.com/products?limit=10&skip=${offset * 10}`)
    ).json();
    console.log("data", data);
    setProducts(data.products);
    setTotalPages(Math.round(data.total / 10));
  };

  useEffect(() => {
    fetchProducts();
  }, [offset]);

  return (
    <>
      <div className="product-listing">
        {products?.map(({ id = "", thumbnail = "", title = "" }) => {
          return (
            <div className="product-container">
              <img src={thumbnail} alt={`product-${id}`} />
              <label>{title}</label>
            </div>
          );
        })}
      </div>
      <Pagination
        totalPages={totalPages}
        offset={offset}
        setOffset={setOffset}
      />
    </>
  );
};

export default Product;
