const Pagination = ({ totalPages = 10, setOffset = () => {}, offset }) => {
    return (
      <div className="pagination-wrapper">
        <span
          onClick={() => {
            if (offset > 1) {
              setOffset((prev) => prev - 1);
            }
          }}
        >
          L
        </span>
        {[...new Array(totalPages)].map((_, index) => {
          return (
            <span
              className={index + 1 === offset ? "active" : ""}
              onClick={() => setOffset(index + 1)}
            >
              {index + 1}
            </span>
          );
        })}
        <span
          onClick={() => {
            if (offset !== totalPages) {
              setOffset((prev) => prev + 1);
            }
          }}
        >
          R
        </span>
      </div>
    );
  };
  
  export default Pagination;
  