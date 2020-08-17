import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Button from "./Components/Button/Button";
import Modal from "./Components/Modal/Modal";
import Base from "./Components/Modal/base";
import ListTweet from "./Components/ListTweet/ListTweet";
import { TWEETS_STORAGE } from "./utils/contants";

function App() {
  const [modalOpen, setModal] = useState(false);
  const [allTweets, setAllTweets] = useState([]);

  const closeModal = () => {
    setModal(false);
  };

  useEffect(() => {
    const allT = localStorage.getItem(TWEETS_STORAGE);
    const allF = JSON.parse(allT);
    setAllTweets(allF);
  }, []);

  return (
    <div className="grid_principal" id="app">
      <Base closeModal={closeModal} />
      <div className="grid_principal_child">
        <Header />
      </div>
      <div className="grid_principal_child">
        {modalOpen === false && <ListTweet allTweets={allTweets} closeModal={closeModal} />}
      </div>
      <div className="grid_principal_child">
        <Button setModal={setModal} modalOpen={modalOpen} />
      </div>

      <Modal
        modalOpen={modalOpen}
        closeModal={closeModal}
        setAllTweets={setAllTweets}
      />
    </div>
  );
}

export default App;
