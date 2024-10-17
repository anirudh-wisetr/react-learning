import { useEffect } from "react";

const ImageContainer = ({ images = [], setOffset = () => {} }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (param) => {
        if (param[0]?.isIntersecting) {
          observer.unobserve(lastImg);
          setOffset((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );
    const lastImg = document.querySelector(".image:last-child");
    if (!lastImg) return;
    observer.observe(lastImg);

    return () => {
      if (lastImg) {
        observer.unobserve(lastImg);
        observer.disconnect();
      }
    };
  }, [images]);

  return (
    <div
      className="image-container"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {images?.map(({ thumbnail = "", id = "" }) => {
        return (
          <img
            src={thumbnail}
            className="image"
            style={{ objectFit: "contain", height: "500px" }}
            key={id}
            alt={"image"}
          />
        );
      })}
    </div>
  );
};

export default ImageContainer;

// NOTE
// 1) document.querySelector HOTA HEI | NA KI getQuerySelectorAll
// 2) if (!lastImg) return;  BECAUSE LASTIMAGE HEI HI NHI TO DON'T SHOW
// 3)
