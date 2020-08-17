import React from "react";
import "./ListTweet.scss";
import Tweet from "../Tweet/Tweet";

const ListTweet = (props) => {
  const { allTweets, closeModal } = props;

  return (
    <div className="grid-container" onClick={closeModal}>
      {allTweets &&
        Object.values(allTweets)
          // .slice(0, 3)
          .sort((a, b) => (a.id > b.id ? 1 : -1))

          .map((tweet, index) =>
            // <div className="grid-item" key={index}>
            //   <Tweet tweet={tweet} index={index} />
            // </div>
            console.log(tweet)
          )}
    </div>
  );
};

export default ListTweet;
