import React, { useState } from "react";
import Button from "../components/button/Button";
import USPanel from "../components/us-panel/USPanel";
import MetricPanel from "../components/metric-panel/MetricPanel";
import "./BMI.css";

function BMI() {
  const [selected, setSelected] = useState("US Units");
  const [status, setStatus] = useState("");
  const [valuesMetric, setValuesMetric] = useState({
    age: "",
    gender: "female",
    height: "",
    weight: "",
  });

  const [valuesUS, setValuesUS] = useState({
    age: "",
    gender: "female",
    height: { ft: "", inch: "" },
    weight: "",
  });

  const display = (bmi, value, className) => {
    return (
      <>
        <div className="bmi-status">
          <p className="description">BMI: {bmi.toFixed(2)}</p>
          <p className={`${className} description`}> ({value})</p>
        </div>
      </>
    );
  };

  const classify = (bmi) => {
    if (bmi < 16) {
      return <>{display(bmi, "Underweight (Severe Thinness)", "severe")}</>;
    } else if (bmi >= 16 && bmi < 17)
      return <>{display(bmi, "Underweight (Moderate Thinness)", "severe")}</>;
    else if (bmi >= 17 && bmi < 18.5)
      return <>{display(bmi, "Underweight (Mild Thinness)", "severe")}</>;
    else if (bmi >= 18.5 && bmi < 25)
      return <>{display(bmi, "Normal", "normal")}</>;
    else if (bmi >= 25 && bmi < 30)
      return <>{display(bmi, "Overweight", "overweight")}</>;
    else if (bmi >= 30 && bmi < 35)
      return <>{display(bmi, "Obese Class I", "obeseI")}</>;
    else if (bmi >= 35 && bmi < 40)
      return <>{display(bmi, "Obese Class II", "obeseII")}</>;
    else if (bmi >= 40)
      return <>{display(bmi, "Obese Class III", "obeseIII")}</>;
    return "Invalid value";
  };

  const handleRadioUS = (e) => {
    setValuesUS({ ...valuesUS, gender: e.target.value });
  };

  const handleRadioMetric = (e) => {
    setValuesMetric({ ...valuesMetric, gender: e.target.value });
  };

  const handleMenu = (e) => {
    setSelected(e.target.innerHTML);
    setStatus(null);
    setValuesMetric({
      age: "",
      gender: "female",
      height: "",
      weight: "",
    });
    setValuesUS({
      age: "",
      gender: "female",
      height: { ft: "", inch: "" },
      weight: "",
    });
  };

  const calculateUS = () => {
    // convert height to inches
    const hgt = valuesUS.height.ft * 12 + Number(valuesUS.height.inch);
    const bmi = 703 * (valuesUS.weight / (hgt * hgt));
    setStatus(classify(bmi));
  };

  const calculateMetric = () => {
    const hgt = Number(valuesMetric.height);
    const bmi = Number(valuesMetric.weight) / (hgt * hgt);
    setStatus(classify(bmi));
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    if (
      (valuesUS.height.ft.length > 0 &&
        valuesUS.weight.length > 0 &&
        valuesUS.height.inch.length > 0) ||
      (valuesMetric.height.length > 0 && valuesMetric.weight.length > 0)
    ) {
      if (selected.toLowerCase() === "us units") {
        calculateUS();
        return;
      } else if (selected.toLowerCase() === "metric units") {
        calculateMetric();
        return;
      }
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    if (selected.toLowerCase() === "us units") {
      setValuesUS({
        age: "",
        gender: "female",
        height: { ft: "", inch: "" },
        weight: "",
      });
    } else if (selected.toLowerCase() === "metric units") {
      setValuesMetric({
        age: "",
        gender: "female",
        height: "",
        weight: "",
      });
    }
    setStatus(null);
  };

  return (
    <>
      <h1 className="bmi-title">BMI Calculator</h1>
      <form className="bmi-container">
        <div className="topmenu">
          <ul className="topmenu-items">
            <li
              className={selected === "US Units" ? "active" : ""}
              onClick={(e) => handleMenu(e)}
            >
              US Units
            </li>
            <li
              className={selected === "Metric Units" ? "active" : ""}
              onClick={(e) => handleMenu(e)}
            >
              Metric Units
            </li>
          </ul>
        </div>

        <div className="panel">
          {selected.toLowerCase() === "us units" ? (
            <USPanel
              setValuesUS={setValuesUS}
              valuesUS={valuesUS}
              handleRadio={handleRadioUS}
            />
          ) : (
            <MetricPanel
              setValuesMetric={setValuesMetric}
              valuesMetric={valuesMetric}
              handleRadio={handleRadioMetric}
            />
          )}
        </div>
        <div className="bmi-value">{status}</div>
        <div className="button-group">
          <Button
            className={"start-button"}
            value={"Calculate"}
            onClick={(e) => handleCalculate(e)}
          />
          <Button
            value={"Reset"}
            className={"reset-button"}
            onClick={handleReset}
          />
        </div>
      </form>
    </>
  );
}

export default BMI;
