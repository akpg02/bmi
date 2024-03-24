import React from "react";
import "./MetricPanel.css";

function MetricPanel({ setValuesMetric, valuesMetric, handleRadio }) {
  const { age, gender, weight, height } = valuesMetric;

  return (
    <div className="panel-container">
      <div className="row">
        <div className="col label">Age</div>
        <div className="col right age-row">
          <input
            required
            type="text"
            placeholder="age"
            value={age}
            onChange={(e) =>
              setValuesMetric({ ...valuesMetric, age: Number(e.target.value) })
            }
          />
        </div>
      </div>
      <div className="row">
        <div className="col label">Gender</div>
        <div className="col right">
          <input
            required
            type="radio"
            name="gender"
            id="male"
            value="male"
            checked={gender === "male"}
            onChange={(e) => handleRadio(e)}
          />{" "}
          <span className="label">Male</span>
          <input
            required
            type="radio"
            name="gender"
            id="female"
            value="female"
            className="label"
            checked={gender === "female"}
            onChange={(e) => handleRadio(e)}
          />
          <span className="label">Female</span>
        </div>
      </div>
      <div className="row">
        <div className="col label">Height</div>
        <div className="col height right">
          <input
            required
            type="text"
            placeholder="m"
            value={height}
            onChange={(e) =>
              setValuesMetric((p) => ({
                ...p,
                height: e.target.value,
              }))
            }
          />
        </div>
      </div>
      <div className="row">
        <div className="col label">Mass</div>
        <div className="col right pounds-row">
          <input
            type="text"
            placeholder="kg"
            value={weight}
            onChange={(e) =>
              setValuesMetric({ ...valuesMetric, weight: e.target.value })
            }
          />
        </div>
      </div>
    </div>
  );
}

export default MetricPanel;
