import React from "react";
import "./Button.scss";

const Button = (props) => {
  const { setModal, modalOpen } = props;

  return (
    <div className="grid_container_button">
      <div className="grid_container_button_item">
        <button onClick={() => setModal(!modalOpen)} className="button1">
          <i className="fas fa-retweet" id="logoButton"></i>
        </button>
      </div>
    </div>
  );
};
export default Button;
