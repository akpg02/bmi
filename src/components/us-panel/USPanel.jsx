import React from "react";
import "./USPanel.css";

function USPanel({ setValuesUS, valuesUS, handleRadio }) {
  const {
    age,
    gender,
    weight,
    height: { ft, inch },
  } = valuesUS;

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
              setValuesUS({ ...valuesUS, age: Number(e.target.value) })
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
            placeholder="ft"
            value={ft}
            onChange={(e) =>
              setValuesUS((p) => ({
                ...p,
                height: { ...p.height, ft: e.target.value },
              }))
            }
          />{" "}
          <input
            required
            type="text"
            placeholder="in"
            value={inch}
            onChange={(e) =>
              setValuesUS((p) => ({
                ...p,
                height: { ...p.height, inch: e.target.value },
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
            placeholder="lbs"
            value={weight}
            onChange={(e) =>
              setValuesUS({ ...valuesUS, weight: e.target.value })
            }
          />
        </div>
      </div>
    </div>
  );
}

export default USPanel;
