INSERT INTO users (id, team_id, name, bio, email, password, avatar) 
VALUES
  (1, 'Hawarsa','Playmaker', 'Hawarsa@gmail.com', '123456', 'https://i.imgur.com/LpaY82x.png'),
  (2, 'LB', 'GOAT', 'LB@gmail.com', '123456', 'https://i.imgur.com/Nmx0Qxo.png'),
  (2, 'Tanker', 'Spot up marksman', 'Tanker@gmail.com', '123456', 'https://i.imgur.com/T2WwVfS.png'),
  (3, 'Awab', 'Floor General' 'Awab@gmail.com', '123456', 'https://i.imgur.com/FK8V841.jpg'),
  (1, 'Eddy', '3pt Specialist', 'Eddy@gmail.com', '123456', 'https://i.imgur.com/twYrpay.jpg'),
  (3, 'Kobz', 'Mid-range assasin' 'Kobz@gmail.com', '123456', 'https://i.imgur.com/TdOAdde.jpg');


INSERT INTO matches (
  id,
  date DATE NOT NULL,
  team1_id,
  team2_id,
  winner_id,
  team1_score,
  team2_score
);

INSERT INTO teams (
  id,
  location_id,
  team_name,
  team_description,
  avatar
);

INSERT INTO location (
  id,
  city,
  province,
  country
);

INSERT INTO match_stats (
  id,
  user_id,
  match_id,
  total_score
);
