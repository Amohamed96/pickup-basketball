module.exports = (db) => {
  const getUsers = () => {
      const query = {
          text: 'SELECT * FROM users',
      };

      return db
          .query(query)
          .then((result) => result.rows)
          .catch((err) => err);
  };

  const getUserByEmail = email => {

      const query = {
          text: `SELECT * FROM users WHERE email = $1` ,
          values: [email]
      }

      return db
          .query(query)
          .then(result => result.rows[0])
          .catch((err) => err);
  }
//TODO: ADD OTHER VALUES 
  const addUser = (firstName, email, password) => {
      const query = {
          text: `INSERT INTO users (first_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *` ,
          values: [firstName, email, password]
      }

      return db.query(query)
          .then(result => result.rows[0])
          .catch(err => err);
  }


  return {
      getUsers,
      getUserByEmail,
      addUser
  };
};