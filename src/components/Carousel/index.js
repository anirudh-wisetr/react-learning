import { useEffect, useRef, useState } from "react";
import "./style.scss";

const Carousel = () => {
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  const fetchProduct = async () => {
    try {
      const response = await (
        await fetch("https://www.reddit.com/r/aww/top/.json?t=all")
      ).json();
      // DON'T SET STATE UNTIL YOU GET ARRAY OF IMAGES ONLY
      // setProducts(response.data.children);
      if (response.data.children) {
        const thumbnailArray = response.data.children.map(
          (res) => res.data.thumbnail
        );
        setProducts(thumbnailArray);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log("active", active);
  }, [active]);

  const handleNext = () => {
    setActive((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActive((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (products.length) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 1000);
    }

    return () => {
      clearInterval(timerRef.current);
    };
  }, [active, products]);

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div
      className="carousel-wrapper"
      onMouseEnter={() => clearInterval(timerRef.current)}
      onMouseLeave={() =>
        (timerRef.current = setInterval(() => {
          handleNext();
        }, 1000))
      }
    >
      <img src={products[active]} alt={`image-${active}`} />
    </div>
  );
};

export default Carousel;

// 1. DON'T SET STATE UNTIL YOU GET ARRAY OF IMAGES ONLY
// setProducts(response.data.children);
//  2. Create ref because state update hogi to sustain rkhni hei values. But only when u have to implement onMouseEnter and onMouseLeave
