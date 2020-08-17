import React, { useState } from "react";
import "./Form.scss";
import moment from "moment";
import { TWEETS_STORAGE } from "../../utils/contants";

let array = [];
let i = 1;

const Form = (props) => {
  const { closeModal, setAllTweets, setEnviado } = props;
  const [formValue, setFormValue] = useState({
    name: "",
    tweet: "",
  });

  const SendTweet = (event, formValue) => {
    event.preventDefault();
    const { name, tweet } = formValue;

    if (!name || !tweet) {
      console.log("Todos los campos son obligatorios");
      setEnviado(false);
    } else {
      formValue.id = i++;
      formValue.time = moment();
      array.push(formValue);
      setAllTweets(array);
      localStorage.setItem(TWEETS_STORAGE, JSON.stringify(array));
      setEnviado(true);
      closeModal();
    }
  };

  const onFormChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <div className="divForm">
        <label className="divForm_title">Enviar Tweet</label>

        <form
          onSubmit={(event) => SendTweet(event, formValue)}
          onChange={(event) => onFormChange(event)}
        >
          <div className="divForm_text">
            <input
              type="text"
              name="name"
              className="divForm_text_input"
              placeholder="Escriba su Nombre"
            ></input>
          </div>

          <div className="divForm_textArea">
            <textarea
              className="divForm_textArea_input"
              name="tweet"
              rows="8"
              cols="50"
              placeholder="Escriba su tweet"
            ></textarea>
          </div>
          <div className="divForm_divButton">
            <button className="divForm_divButton_button">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
