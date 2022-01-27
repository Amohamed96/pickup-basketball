import React, { useState, useEffect } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import axios from "axios";

const ButtonActions = (props) => {
  return (
    <Card.Content extra>
      <div className="ui two buttons">
        <Button basic color="green" onClick={() => props.handleStatus("true")}>
          Approve
        </Button>
        <Button basic color="red" onClick={() => props.handleStatus("false")}>
          Decline
        </Button>
      </div>
    </Card.Content>
  );
};

export default function ChallengeCard(props) {
  const { challenge, users } = props;
  const [status, setStatus] = useState(challenge.request_status);
  const handleStatus = (newStatus) => {
    setStatus(newStatus);
    props.handleStatusAPI(challenge, newStatus);
  };
  return (
    <Card.Group>
      <Card>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src={users[challenge.challenger_id - 1].avatar}
          />
          <Card.Header>
            CHALLENGE FROM:{users[challenge.challenger_id - 1].name}
          </Card.Header>
          <Card.Meta>Cage Court</Card.Meta>
        </Card.Content>
        {status === null && (
          <ButtonActions challenge={challenge} handleStatus={handleStatus} />
        )}
        {status === "true" && <span>You accepted this challenge</span>}
        {status === "false" && <span>You declined this challenge</span>}
      </Card>
    </Card.Group>
  );
}
