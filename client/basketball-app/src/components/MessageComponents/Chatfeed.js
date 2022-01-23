// import React from "react";
// import { render } from "react-dom";
// import MessageForm from "./MessageForm";
// import MyMessage from "./MyMessage";
// import TheirMessage from "./TheirMessage";

// function Chatfeed(props) {
//   const { chats, activeChat, userName, messages } = props;

//   const chat = chats && chats[activeChat];

//   console.log("PROPS>", chat, userName, messages);
//   const renderMessages = () => {
//     const keys = Object.keys(messages);
//     console.log("Keys", keys);
//     return keys.map((key, index) => {
//       const message = messages[key];
//       const lastMessageKey = index === 0 ? null : keys[index - 1];
//       const isMyMessage = userName === message.sender.userName;

//       return (
//         <div key={`msg_${index}`} style={{ width: "100%" }}>
//           <div className="message-block">
//             {isMyMessage ? (
//               <MyMessage message={message} />
//             ) : (
//               <TheirMessage
//                 message={message}
//                 lastMessage={messages[lastMessageKey]}
//               />
//             )}
//           </div>
//           <div
//             className="read-receipt"
//             style={{
//               marginRight: isMyMessage ? "19px" : "0px",
//               marginLeft: isMyMessage ? "0px" : "69px",
//             }}
//           >
//             {" "}
//             read-receipts go here
//           </div>
//         </div>
//       );
//     });
//   };

//   renderMessages();

//   if (!chat) return "loading....";

//   return (
//     <div className="chatFeed">
//       <div className="chatTitleContainer">
//         <div className="chatTitle">{chat?.title}</div>
//         <div className="chatSubTitle">
//           {chat.people.map((person) => ` ${person.person.username}`)}
//         </div>
//       </div>
//       {renderMessages}
//       <div style={{ height: "100px" }} />
//       <div className="message-form-container">
//         <MessageForm {...props} chatId={activeChat} />
//       </div>
//     </div>
//   );
// }

// export default Chatfeed;
