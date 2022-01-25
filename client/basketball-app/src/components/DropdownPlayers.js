import React from "react";
import { Dropdown } from "semantic-ui-react";

const languageOptionsPlayers = [
  { key: "Arabic", text: "Arabic", value: "Arabic" },
  { key: "Chinese", text: "Chinese", value: "Chinese" },
  { key: "Danish", text: "Danish", value: "Danish" },
  { key: "Dutch", text: "Dutch", value: "Dutch" },
  { key: "English", text: "English", value: "English" },
  { key: "French", text: "French", value: "French" },
  { key: "German", text: "German", value: "German" },
  { key: "Greek", text: "Greek", value: "Greek" },
  { key: "Hungarian", text: "Hungarian", value: "Hungarian" },
  { key: "Italian", text: "Italian", value: "Italian" },
  { key: "Japanese", text: "Japanese", value: "Japanese" },
  { key: "Korean", text: "Korean", value: "Korean" },
  { key: "Lithuanian", text: "Lithuanian", value: "Lithuanian" },
  { key: "Persian", text: "Persian", value: "Persian" },
  { key: "Polish", text: "Polish", value: "Polish" },
  { key: "Portuguese", text: "Portuguese", value: "Portuguese" },
  { key: "Russian", text: "Russian", value: "Russian" },
  { key: "Spanish", text: "Spanish", value: "Spanish" },
  { key: "Swedish", text: "Swedish", value: "Swedish" },
  { key: "Turkish", text: "Turkish", value: "Turkish" },
  { key: "Vietnamese", text: "Vietnamese", value: "Vietnamese" },
];

export default function DropdownPlayers(props) {
  const { users } = props;
  const players = users.map((player) => {
    return player.name;
  });
  console.log("USERS", users);

  return (
    <div>
      <Dropdown
        button
        className="icon"
        labeled
        icon="basketball ball"
        options={players}
        search
        text="Seclect Player"
      />
    </div>
  );
}
