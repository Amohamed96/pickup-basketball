import React from "react";
//import css
import classNames from "classnames";

export default function LeaderboardItem(props) {
  const leaderboardClass = classNames("interviewers__item",{
    "interviewers__item--selected": props.selected,
  });

  return (
    <li className={leaderboardClass}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}