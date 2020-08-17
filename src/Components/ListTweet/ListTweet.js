import React from "react";
import "./ListTweet.scss";
import Tweet from "../Tweet/Tweet";

const ListTweet = (props) => {
  const { allTweets, closeModal } = props;

  return (
    <div className="grid-container" onClick={closeModal}>
      {allTweets &&
        allTweets
          .reverse()
          .slice(0, 6)
          .map((tweet, index) =>
            <div className="grid-item" key={index}>
              <Tweet tweet={tweet} index={index} />
            </div>
          )}
    </div>
  );
};

export default ListTweet;
