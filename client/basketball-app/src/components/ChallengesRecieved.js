import React, { useState, useEffect } from "react";
import axios from "axios";
export default function ChallengesRecieved(props) {
  const { users, challenges } = props;
  const [error, setError] = useState("");
  const [user, setUser] = useState("");
  const currentUser = localStorage.getItem("user");
  console.log("USERS *********--", users);

  const handleStatus = (challenge, newStatus) => {
    console.log("CHALLENGE *********--", challenge);
    const headers = { "Content-Type": "application/json" };
    axios
      .put(
        `/api/users/player/${challenge.user_id}`,
        {
          request_status: newStatus,
          user_id: challenge.user_id,
          challenge_request_id: challenge.id,
        },
        {
          headers: headers,
        }
      )
      .then((result) => {
        // localStorage.setItem("user", JSON.stringify(result.data));
        // setRedirect("/profile");
      })

      .catch((err) => {
        console.log("errrrr", err);
        setError("ERROR");
      });
  };
  console.log("USERS CH===>", users);
  console.log("USERS CH===>", users);

  return (
    <>
      <div>{/* {users[1].name} */}</div>
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
                          <button onClick={() => handleStatus(challenge, true)}>
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
    </>
  );
}
