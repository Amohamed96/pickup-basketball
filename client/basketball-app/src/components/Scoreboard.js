// import React, { useState } from "react";
// import "./Styles/Scoreboard.scss";
// import Timer from "./Timer";
// export const Scoreboard = () => {
//   const [countOne, setCountOne] = useState(0);
//   const [countTwo, setCountTwo] = useState(0);

//   return (
//     <div className="scoreboard-container">
//       <div className="timer-container">
//         <Timer />
//       </div>
//       <div className="score-container">
//         <div className="team-container">
//           <div className="count-score">{countOne}</div>
//           <div className="button-wrapper">
//             <button onClick={() => setCountOne(countOne - 1)}>-</button>
//             <button onClick={() => setCountOne(countOne + 1)}>+</button>
//             <button onClick={() => setCountOne(countOne + 2)}>+2</button>
//           </div>
//           <input
//             name="player1_id"
//             placeholder="Player 1"
//             className="player-input"
//           ></input>
//         </div>
//         <div className="team-container">
//           <div className="count-score">{countTwo}</div>
//           <div className="button-wrapper">
//             <button onClick={() => setCountTwo(countTwo - 1)}>-</button>
//             <button onClick={() => setCountTwo(countTwo + 1)}>+</button>
//             <button onClick={() => setCountTwo(countTwo + 2)}>+2</button>
//           </div>
//           <input
//             name="player2_id"
//             placeholder="Player 2"
//             className="player-input"
//           ></input>
//         </div>
//       </div>
//       <input
//         name="winner_id"
//         className="player-input"
//         placeholder="Winner"
//       ></input>
//       <input
//         type="submit"
//         className="button"
//         value="SUBMIT"
//         onClick={handleMatchesPlayer}
//       ></input>
//     </div>
//   );
// };
