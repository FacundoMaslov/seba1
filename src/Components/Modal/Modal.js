import React, { useState } from "react";
import "./Modal.scss";
import Form from "../Form/Form";
import TweetModal from "../TweetModal/TweetModal";

const Modal = (props) => {
  const [enviado, setEnviado] = useState(false);
  const { modalOpen } = props;

  return (
    <div>
      {modalOpen == true ? (
        <div className="div2">
          <Form
            closeModal={props.closeModal}
            setAllTweets={props.setAllTweets}
            setEnviado={setEnviado}
          />
        </div>
      ) : (
        enviado == true && (
          <TweetModal enviado={enviado} setEnviado={setEnviado} />
        )
      )}
    </div>
  );
};

export default Modal;
