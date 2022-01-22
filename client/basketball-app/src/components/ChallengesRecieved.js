import React from "react";

export default function ChallengesRecieved(props) {
  const { challenges } = props;

  return challenges.map((challenge) => {
    console.log("CHALLENGE MSG----->", challenge.challenge_message);

    return <div>{challenge.challenge_message}</div>;
  });
}
