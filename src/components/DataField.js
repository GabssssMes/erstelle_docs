import React from "react";
import style from "../styles/DataField.module.css";

const DataField = (props) => {
  return (
    <div className={style.element}>
      <label htmlFor={props.name}>{props.name}</label>
      <input
        type={props.type}
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      ></input>
    </div>
  );
};

export { DataField };
