"use client"
import { useEffect, useRef, useState } from "react";
import Styles from "./lib/otp.module.css"
const OtpInput = ({ getValue, numInputs, buttonLabel, removeStyles, classNames, ...props }) => {

  const [otp, setOtp] = useState(Array(numInputs).fill(''));

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  const inputRefs = useRef([]);
  const handleChange = (index, value) => {
    if (!isNaN(value)) {
      setOtp(prevOtp => {
        const newOtp = [...prevOtp];
        newOtp[index] = value;
        return newOtp;
      });
      if (index < numInputs - 1 && value !== "") {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && otp[index] === "" && index > 0) {
      setOtp(prevOtp => {
        const newOtp = [...prevOtp];
        newOtp[index - 1] = "";
        return newOtp;
      });
      inputRefs.current[index - 1].focus();
    } else if (event.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1].focus();
    } else if (event.key === "ArrowRight" && index < numInputs - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleButtonClick = () => {
    getValue(otp)
  }

  return (
    <div
      className={removeStyles ? classNames.layoutWrapper : Styles.ReactOtpLayoutWrapper}
    >
      <div
        className={removeStyles ? classNames.inputWrapper : Styles.ReactOtpInputWrapper}
      >
        {otp.map((value, index) => (
          <input
            {...props}
            key={`input-arr-${index}`}
            maxLength={1}
            inputMode="numeric"
            onChange={(event) => handleChange(index, event.target.value)}
            value={value}
            ref={(el) => (inputRefs.current[index] = el)}
            onKeyDown={(event) => handleKeyDown(index, event)}
            className={removeStyles ? classNames.input : Styles.ReactOtpInput}
          />
        ))}
      </div>
      <button
        type="button"
        className={removeStyles ? classNames.button : Styles.ReactOtpButton}
        onClick={handleButtonClick}
      >
        {buttonLabel ? buttonLabel : "  Verify Now"}
      </button>
    </div>
  );
};

export default OtpInput;
