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
      .then((result) => result.rows[0])
      .catch((err) => err);
  };
  //TODO: ADD OTHER VALUES
  const addUser = (name, email, password) => {
    console.log('Heloo')
    const query = {
      text: `INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`,
      values: [name, email, password],
    };

    return db
      .query(query)
      .then(result)
      .then((data) => console.log('DATA>', data.json()))
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
      text: `SELECT * FROM teams WHERE team_name = $1`,
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
      text: `INSERT INTO teams (location_id, team_name, team_description, avatar) VALUES ($1, $2, $3, $4) RETURNING *`,
      values: [location_id, team_name, team_description, avatar],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  return {
    getUsers,
    getUserByEmail,
    addUser,
    getTeams,
    getTeamByName,
    addTeam,
  };
};
