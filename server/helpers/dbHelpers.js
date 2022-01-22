module.exports = (db) => {
  const getUsers = () => {
    const query = {
      text: "SELECT * FROM users",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getUserByEmail = (email) => {
    const query = {
      text: `SELECT * FROM users WHERE email = $1`,
      values: [email],
    };

    return db
      .query(query)
      .then((result) => (result.rows ? result.rows[0] : undefined))
      .catch((err) => err);
  };

  //GET USER BY ID

  const getUserById = (id) => {
    const query = {
      text: `SELECT * FROM users WHERE id = $1`,
      values: [id],
    };

    return db
      .query(query)
      .then((result) => (result.rows ? result.rows[0] : undefined))
      .catch((err) => err);
  };

  //TODO: ADD OTHER VALUES
  const addUser = async (name, email, password, bio, avatar, team_id) => {
    const query = {
      text: `INSERT INTO users (name, email, password, bio, avatar, team_id) VALUES ($1, $2, $3, $4, $5, $6) returning *`,
      values: [name, email, password, bio, avatar, team_id],
    };

    return db
      .query(query)
      .then((result) => {
        console.log("DB HELPERS RESULT >>>", result);
        return result.rows[0];
      })
      .catch((err) => err);
  };

  //GET TEAMS

  const getTeams = () => {
    const query = {
      text: "SELECT * FROM teams",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  //Get Team By Name. (Edge case in case team already exists)

  const getTeamByName = (team_name) => {
    const query = {
      text: "SELECT * FROM teams WHERE team_name = $1",
      values: [team_name],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  // Add teams to database.

  const addTeam = (location_id, team_name, team_description, avatar) => {
    const query = {
      text: "INSERT INTO teams (location_id, team_name, team_description, avatar) VALUES ($1, $2, $3, $4) RETURNING *",
      values: [location_id, team_name, team_description, avatar],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  //GET MATCHES

  const getMatches = () => {
    const query = {
      text: "SELECT * FROM matches",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  //Get matches By Id. (Edge case in case id already exists)

  const getMatchById = (id) => {
    const query = {
      text: "SELECT * FROM teams WHERE id = $1",
      values: [id],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  // Add match to database.

  const addMatch = (
    match_date,
    team1_id,
    team2_id,
    winner_id,
    team1_score,
    team2_score
  ) => {
    const query = {
      text: "INSERT INTO matches (match_date, team1_id, team2_id, winner_id, team1_score, team2_score) VALUES ($1, $2, $3, $4, $5, $6)RETURNING *",
      values: [
        match_date,
        team1_id,
        team2_id,
        winner_id,
        team1_score,
        team2_score,
      ],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  const getChallengesById = (user_id) => {
    const query = {
      text: "SELECT * FROM challenge_request WHERE user_id = $1",
      values: [user_id],
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };
  const addChallenge = (
    challenger_id,
    user_id,
    location_id,
    date,
    challenge_message,
    request_status
  ) => {
    const query = {
      text: "INSERT INTO challenge_request (challenger_id, user_id, location_id, date, challenge_message, request_status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      values: [
        challenger_id,
        user_id,
        location_id,
        date,
        challenge_message,
        request_status,
      ],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };
  // const getDataForHome = () => {
  //   //qeuries for data
  // }

  return {
    getUsers,
    getUserByEmail,
    getUserById,
    addUser,
    getTeams,
    getTeamByName,
    addTeam,
    getMatches,
    getMatchById,
    addMatch,
    getChallengesById,
    addChallenge,
  };
};
