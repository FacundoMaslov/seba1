import React from "react";
import "./base.scss";

const base = (props) => {
  const { closeModal } = props;

  return <div className="baseC" onClick={closeModal}></div>;
};

export default base;
