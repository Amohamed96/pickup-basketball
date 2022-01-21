import React from "react";

export default function ChallengesRecieved(props) {
  const { challenges } = props;
  const []
  const msg = challenges.map((challenge) => {
    console.log("CHALLENGE MSG----->", challenge.challenge_message);
    challenge.challenge_message;
    
  });
  return { msg };
}
