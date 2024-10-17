import "./style.scss";

const Toast = ({ toasts = [], handleClose = () => {} }) => {
  return (
    <div className="toast-wrapper">
      {toasts?.map(({ id, type }) => {
        return (
          <div className={`toast-container ${type}`} key={id}>
            <label>{type}</label>
            <span onClick={() => handleClose(id)}>X</span>
          </div>
        );
      })}
    </div>
  );
};

export default Toast;
