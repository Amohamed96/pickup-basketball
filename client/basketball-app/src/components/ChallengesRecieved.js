import React from "react";

export default function ChallengesRecieved(props) {
  const { challenges } = props;
<<<<<<< HEAD

  return challenges.map((challenge) => {
    console.log("CHALLENGE MSG----->", challenge.challenge_message);

    return <div>{challenge.challenge_message}</div>;
  });
=======
  // const []
  const msg = challenges.map((challenge) => {
    console.log("CHALLENGE MSG----->", challenge.challenge_message);
    return challenge.challenge_message;
  });
  return <div>{msg} </div>;
>>>>>>> main
}
