import { Fragment, useState } from "react";
import "./style.scss";

const operators = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "-",
  "*",
  "/",
  "AC",
  "=",
];

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e?.preventDefault();
    try {
      const value = eval(inputValue);
      setInputValue(value);
    } catch (e) {
      alert(e);
    }
  };

  const handleChange = (value) => {
    console.log("anivalue", value);
    if (value === "AC") {
      setInputValue("");
    } else if (value === "=") {
      handleSubmit();
    } else {
      setInputValue((prevVal) => prevVal + value);
    }
  };

  const handleValue = (val) => {
    setInputValue(val);
  };

  return (
    <div className="calculator-wrapper">
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={(e) => handleValue(e.target.value)}
        />
      </form>
      <div className="calculator-operators">
        {operators.map((operator, index) => {
          return (
            <Fragment key={index}>
              <span onClick={() => handleChange(operator)}>{operator}</span>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Calculator;

// Meine ek galti ki thi yaha operatos mei bhi ek handleChange use kar raha tha aur input onChange mei bhi, 2 alag alag hei 