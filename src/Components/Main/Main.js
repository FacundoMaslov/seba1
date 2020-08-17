import React from "react";
import Header from "../Components/Header/Header";
import ListTweet from "../Components/ListTweet/ListTweet";
import Button from "../Components/Button/Button";
import "./Main.scss";

const Main = () => {
  return (
    <div>
      <Header />
      <ListTweet />
      <Button />
    </div>
  );
};

export default Main;
