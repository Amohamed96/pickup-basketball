import React, { useState, useEffect } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import axios from "axios";
import { CardGroup } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import ChallengeCard from "./ChallengeCard";

const ButtonActions = (props) => {
  return (
    <Card.Content extra>
      <div className="ui two buttons">
        <Button
          basic
          color="green"
          onClick={() => props.handleStatus(props.challenge, true)}
        >
          Approve
        </Button>
        <Button
          basic
          color="red"
          onClick={() => props.handleStatus(props.challenge, false)}
        >
          Decline
        </Button>
      </div>
    </Card.Content>
  );
};

export default function ChallengesRecieved(props) {
  const { challenges } = props;
  const [error, setError] = useState("");
  const [users, setUsers] = useState("");
  const [response, setResponse] = useState("pending");

  let response_message = "";

  useEffect(() => {
    axios.get("http://localhost:3000/api/users").then((res) => {
      setUsers(res.data);
      console.log("RES DATA CH", res.data);
    });
  }, []);

  const handleStatus = (challenge, newStatus = "pending") => {
    console.log("CHALLENGE *********--", challenge);
    const headers = { "Content-Type": "application/json" };
    axios
      .put(
        `/api/users/player/${challenge.user_id}`,
        {
          request_status: newStatus,
          user_id: challenge.user_id,
          challenge_request_id: challenge.id,
          // accepted_at: new Date.toLocaleDateString(),
          // declined_at: new Date.toLocaleDateString(),
        },
        {
          headers: headers,
        }
      )
      .then(() => {
        // localStorage.setItem("user", JSON.stringify(result.data));
        // setRedirect("/profile");
      })

      .catch((err) => {
        console.log("errrrr", err);
        setError("ERROR");
      });
  };
  console.log("USERS CHALLENGES!===>", challenges);

  return (
    <>
      {challenges.map((challenge) => {
        return (
         <ChallengeCard handleStatusAPI={handleStatus} challenge={challenge} users={users} />
        );
      })}

      {/* <div>{users[1].name}</div>
      <div className="leaderboardContainer">
        <section class="content-info">
          <div class="container paddings-mini">
            <div class="row">
              <div class="col-lg-12">
                {challenges.map((challenge) => (
                  <table class="table-striped table-responsive table-hover result-point">
                    <thead class="point-table-head">
                      <tr>
                        <th class="text-left">Challenger Pic</th>
                        <th class="text-left">Challenger Name</th>
                        <th class="text-center"> MESSAGE</th>
                        <th class="text-center">Accept</th>
                        <th class="text-center">Decline</th>
                      </tr>
                    </thead>
                    <tbody class="text-center">
                      `{" "}
                      <tr>
                        <td class="text-left number">
                          1<i class="fa fa-caret-up" aria-hidden="true"></i>
                        </td>
                        <td class="text-left">
                          <img alt="Profile Pic" />
                          <span>{users.name}</span>
                        </td>
                        <td>{challenge.challenge_message}</td>
                        <td>
                          <button onClick={() => }>
                            ACCEPT
                          </button>
                        </td>
                        <td>
                          <button
                            onClick={() => handleStatus(challenge, false)}
                          >
                            DECLINE
                          </button>
                        </td>
                        <p>{response_message}</p>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
                ) */}
    </>
  );
}
