import { useEffect, useRef, useState } from "react";
const OTP = ({ number = 4 }) => {
  const [otpInputs, setOtpInputs] = useState([...new Array(number)].fill(""));
  const inpuRefs = useRef([]);

  // useEffect(() => {
  //   inpuRefs.current[0].focus();
  // }, []);

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (!Number(value)) return;

    setOtpInputs((prev) => {
      // tempOtp nhi karta to nhi chal raha tha.
      // Because always REMEMBER react need
      // new array and object to run reconcilitation cycle
      const tempOtp = [...prev];
      tempOtp[index] = value.substring(value.length - 1);
      return tempOtp;
    });

    if (index !== otpInputs.length - 1) {
      inpuRefs.current[index + 1].focus();
    }
  };

  const handlePress = (e, index) => {
    if (e.key === "Backspace") {
      setOtpInputs((prev) => {
        const tempOtp = [...prev];
        tempOtp[index] = "";
        return tempOtp;
      });
      if (index !== 0) {
        inpuRefs.current[index - 1].focus();
      }
    }

    if (e.key === "ArrowLeft" && index !== 0) {
      inpuRefs.current[index - 1].focus();
    }

    if (e.key === "ArrowRight" && index !== otpInputs.length - 1) {
      inpuRefs.current[index + 1].focus();
    }
  };

  const handlePaste = (e, index) => {
    const clipBoardValue = e.clipboardData.getData("text").split("");
    const limitedPastedData = clipBoardValue.slice(0, otpInputs.length);
    console.log("anilimitedPastedData", limitedPastedData);
    setOtpInputs(limitedPastedData);
    inpuRefs.current[otpInputs.length - 1].focus();
  };

  return (
    <div className="otp-wrapper">
      {otpInputs.map((value, index) => {
        return (
          <input
            value={value}
            key={index}
            ref={(reference) => (inpuRefs.current[index] = reference)}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handlePress(e, index)}
            onPaste={(e) => handlePaste(e, index)}
          />
        );
      })}
    </div>
  );
};

export default OTP;
