import React from "react";
import './Styles/Leaderboard.css'

export default function Leaderboard(props) {
  const { users, matches, teams } = props;
  const getTeam = function (teamId) {
<<<<<<< HEAD
=======
    //filter through array of teams
    //if the team_id = team id then return team object
>>>>>>> features/login
    return teams.find(team => {
      if (teamId == team.id)
      return true;
    }) || {}
  }
<<<<<<< HEAD
  console.log("matches LB: ", matches)
  console.log("teams LB: ", teams)
=======
>>>>>>> features/login
  return (
   <div className='leaderboardContainer'>
      <section class="content-info">
    <div class="container paddings-mini">
        <div class="row">
            <div class="col-lg-12">
                <table class="table-striped table-responsive table-hover result-point">
                    <thead class="point-table-head">
                        <tr>
                            <th class="text-left">Rank</th>
                            <th class="text-left">Player</th>
                            <th class="text-center">Rating</th>
                            <th class="text-center">W</th>
                            <th class="text-center">L</th>
                            <th class="text-center">Team</th>
                        </tr>
                    </thead>
                    <tbody class="text-center">
                      {users.map((player) => (
                            <tr>
                            <td class="text-left number">1<i class="fa fa-caret-up" aria-hidden="true"></i></td>
                            <td class="text-left"> <img src={player.avatar}alt="Profile Pic"/><span>{player.name}</span> </td>
                            <td>38</td>
                            <td>26</td>
                            <td>9</td>
                            <td><img src={getTeam(player.team_id).avatar}/></td>
                        </tr>
                      ))}
<<<<<<< HEAD
=======
                        
                        <tr>
                            <td class="text-left number">2 <i class="fa fa-caret-up" aria-hidden="true"></i></td>
                            <td class="text-left"> <img alt="Profile Pic"/><span>B</span> </td>
                            <td>38</td>
                            <td>24</td>
                            <td>7</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td class="text-left number">3 <i class="fa fa-caret-up" aria-hidden="true"></i></td>
                            <td class="text-left"> <img src="https://img.icons8.com/color/48/000000/argentina.png" alt="Profile Pic"/><span>Argentina</span> </td>
                            <td>38</td>
                            <td>22</td>
                            <td>9</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td class="text-left number">4<i class="fa fa-caret-down" aria-hidden="true"></i></td>
                            <td class="text-left"> <img src="https://img.icons8.com/color/48/000000/japan.png" alt="Japan"/><span>Japan</span> </td>
                            <td>38</td>
                            <td>20</td>
                            <td>10</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td class="text-left number">5 <i class="fa fa-caret-up" aria-hidden="true"></i></td>
                            <td class="text-left"> <img src="https://img.icons8.com/color/48/000000/flag.png" alt="Senegal"/><span>Senegal</span> </td>
                            <td>38</td>
                            <td>19</td>
                            <td>7</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td class="text-left number">6<i class="fa fa-caret-down" aria-hidden="true"></i></td>
                            <td class="text-left"> <img src="https://img.icons8.com/color/48/000000/poland.png" alt="Poland"/><span>Poland</span> </td>
                            <td>38</td>
                            <td>18</td>
                            <td>8</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td class="text-left number">7<i class="fa fa-caret-down" aria-hidden="true"></i></td>
                            <td class="text-left"> <img src="https://img.icons8.com/color/48/000000/russian-federation.png" alt="Russia"/><span>Russia</span> </td>
                            <td>38</td>
                            <td>18</td>
                            <td>6</td>
                            <td>14</td>
                        </tr>
                        <tr>
                            <td class="text-left number">8<i class="fa fa-caret-up" aria-hidden="true"></i></td>
                            <td class="text-left"> <img src="https://img.icons8.com/color/48/000000/iran.png" alt="Iran"/><span>Iran</span> </td>
                            <td>38</td>
                            <td>12</td>
                            <td>11</td>
                            <td>15</td>
                        </tr>
                        <tr>
                            <td class="text-left number">9 <i class="fa fa-circle" aria-hidden="true"></i></td>
                            <td class="text-left"> <img src="https://img.icons8.com/color/48/000000/spain.png" alt="Spain"/><span>Spain</span> </td>
                            <td>38</td>
                            <td>26</td>
                            <td>9</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td class="text-left number">10<i class="fa fa-circle" aria-hidden="true"></i></td>
                            <td class="text-left"> <img src="https://img.icons8.com/color/48/000000/france.png" alt="France"/><span>France</span> </td>
                            <td>38</td>
                            <td>24</td>
                            <td>7</td>
                            <td>7</td>
                        </tr>
>>>>>>> features/login
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}
