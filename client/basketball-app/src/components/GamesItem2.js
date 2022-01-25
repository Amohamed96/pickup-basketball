const totalTeamWins = function (team) {
  let teamWins = 0;
  matchesteam.map((match) => {
    if (team.id === match.winner_id) {
      teamWins++;
    }
  });
  return teamWins;
};

const totalTeamLosses = function (team) {
  let teamLosses = 0;
  matchesteam.map((match) => {
    if (
      (team.id !== match.winner_id && team.id === match.team1_id) ||
      team.id === match.team2_id
    ) {
      teamLosses++;
    }
  });
  return teamLosses;
};
