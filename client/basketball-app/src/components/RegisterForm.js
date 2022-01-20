import React, {useState, useEffect} from 'react'
import './Styles/LoginForm.css'
import axios from 'axios'


export default function RegisterForm() {
  const [user, setUser] = useState({ name: null, password: null, password2: null, email: null, bio: null, avatar: null, team_id: null });
	const [error, setError] = useState('')

	const toggleCheckbox = (event) => {
		console.log('EVENT TARGET',event.target)
	} 

	const storeUserData = (e) => {
		console.log('EVENT TARGET +++ ', e.target.value)
		setUser({ ...user, [e.target.name]: e.target.value })
	}

	const handleSignup = () => {
		if (!user.name || !user.password ||!user.email || !user.bio || !user.avatar || !user.team_id)  {
			setError("Sorry, You must enter your credentials to continue")
			return
		}
		if (user.password.length < 3) {
			setError("Sorry, You must enter a password longer than 3 characters")
			return
		}
		if (user.password !== user.password2) {
			setError("Both passwords must match")
			return
		}
		if (user.team_id > 4 || user.team_id <1) {
			setError(`Must pick a team from 1-4... You'll see why `)
			return
		}
		console.log('USER *********--', user)
		axios.post('http://localhost:3001/api/users/signup', user)
    .then((result) => {
      console.log('RESULTS>>', result)
      return result.data
    })
    .then((results) => {
      setUser(results[0])
    })
		.catch((err) => {
			console.log('err', err)
		})
	} 


  return (
    <div className="login-wrap">
		<span className='error'>{error}</span>	
	<div className="login-html">
		<input id="tab-1" type="radio" name="tab" className="sign-in"  /><label for="tab-1" className="tab">Sign In</label>
		<input id="tab-2" type="radio" name="tab" className="sign-up" checked /><label for="tab-2" className="tab"><a href="/register">Sign Up</a></label>
		<div className="login-form">
			<div className="sign-in-htm">
				<div className="group">
					<label for="user" className="label">Username</label>
					<input name="name" id="user" type="text" className="input" onChange={storeUserData} />
				</div>
				<div className="group">
					<label for="pass" className="label">Password</label> 
					<input name="password" id="pass" type="password" className="input" data-type="password" onChange={storeUserData}/>
				</div>
				<div className="group">
					<input id="check" type="checkbox" className="check" onChange={toggleCheckbox}  />
					<label for="check"><span className="icon"></span> Keep me Signed in</label>
				</div>
				<div className="group">
					<input type="submit" className="button" value="Sign In"  />
				</div>
				<div className="hr"></div>
				<div className="foot-lnk">
					<a href="#forgot">Forgot Password?</a>
				</div>
			</div>
			<div className="sign-up-htm">
				<div className="group">
					<label for="user" className="label">Username</label>
					<input name="name" id="user" type="text" className="input" onChange={storeUserData} />
				</div> 
				<div className="group">
					<label for="pass" className="label">Email Address</label>
					<input id="pass" name='email' type="email" className="input" onChange={storeUserData}/>
				</div>
				<div className="group">
					<label for="pass" className="label">Password</label>
					<input name="password" id="pass" type="password" className="input" data-type="password" onChange={storeUserData} />
				</div>
				<div className="group">
					<label for="pass" className="label">Repeat Password</label>
					<input id="pass" name="password2" type="password" className="input" data-type="password"  onChange={storeUserData}/>
				</div>
				<div className="group">
					<label for="user" className="label">Add A Bio! Let players know your playstyle!</label>
					<input name="bio" id="bio" type="text" className="input" onChange={storeUserData} />
				</div> 
				<div className="group">
					<label for="user" className="label">Add Your Profile Pic!</label>
					<input name="avatar" id="img" type="text" className="input" onChange={storeUserData} />
				</div> 
				<div className="group">
					<label for="user" className="label">Pick Your Team!</label>
					<input name="team_id" id="team" placeholder='You must pick from teams 1-4 :)' type="text" className="input" onChange={storeUserData} />
				</div> 
				<div className="group">
					<input type="submit" className="button" value="Sign Up" onClick={handleSignup} />
				</div>
				<div className="hr"></div>
				<div className="foot-lnk">
					<label for="tab-1">Already Member?</label>
				</div>
			</div>
		</div>
	</div>
</div>
  );
}
