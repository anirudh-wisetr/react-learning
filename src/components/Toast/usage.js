import { useRef, useState } from "react";
import Toast from ".";

const ToastUsage = () => {
  const [toasts, setToasts] = useState([]);
  const timerRef = useRef({});
  const handleClose = (toastId) => {
    // MISTAKE I DID - in setTimeout, it's async code. So pass it inside setState
    // const tempTost = [...toasts];
    // const updatedToast = tempTost.filter((data) => toastId !== data.id);
    // setToasts(updatedToast);

    clearTimeout(timerRef.current[id]);
    delete timerRef.current[id];

    setToasts((prev) => {
      const updatedToast = prev.filter((data) => toastId !== data.id);
      return updatedToast;
    });
  };

  const handleAdd = (type = "") => {
    const id = new Date().getTime();
    const payload = {
      id,
      type,
    };
    setToasts((prev) => [...prev, payload]);
    timerRef.current[id] = setTimeout(() => handleClose(id), 4000);
  };

  return (
    <div className="buttons-wrapper">
      <button onClick={() => handleAdd("success")}>Success</button>
      <button onClick={() => handleAdd("info")}>Info</button>
      <button onClick={() => handleAdd("warning")}>Warning</button>
      <button onClick={() => handleAdd("error")}>Error</button>
      <Toast toasts={toasts} handleClose={handleClose} />
    </div>
  );
};

export default ToastUsage;

// POINTS TO REMEMBER -
// 1. First create the logic then do style. Otherwise time nhi rahega
// 2. on handleAdd setTimeout(() => handleClose(id), 4000) jab ye close karega,
//  to nhi chalega because it is async code so use setState with prev
// 3. User ne clear kar diya, to uska time clear kar by useRef.
// PAR YAHA PE STYLING N ALL SAB KARKE DIKHA DE UNHE AUR KEH SIR HO GAYA.
// TAB JAAKE KEH KI ISSE HUM AR ZYDA OPTIMIZED KAR SAKTE HEI then do this.

// clearTimeout(timerRef.current[id]);
// delete timerRef.current[id];

// timerRef.current[id] = setTimeout()
