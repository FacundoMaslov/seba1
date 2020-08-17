import React from "react";
import "./Tweet.scss";
import moment from "moment";

const Tweet = (props) => {
  const {
    tweet: { name, tweet, time },
    index,
  } = props;
  return (
    <div className="tweet_container">
      <h4 className="tweet_date">{name}</h4>
      <div className="tweet_date">
        <button id="tweet_date_button" className="far fa-trash-alt" />
      </div>
      <h5 className="tweet_date">{tweet}</h5>
      <h6 className="tweet_date">{moment(time).format("DD/MM/YYYY HH:mm")}</h6>
    </div>
  );
};
export default Tweet;
