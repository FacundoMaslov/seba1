import React from "react";
import "./TweetModal.scss";

const TweetModal = (props) => {
  const { enviado, setEnviado } = props;

  const change = () => {
    setEnviado(false);
  };

  if (enviado == true) {
    console.log("HOla");
    setTimeout(() => {
      change();
    }, 2000);
    return <div className="Tweet_Modal">Tweet Enviado</div>;
  } else {
    console.log("Chau");
    return null;
  }
};

export default TweetModal;
