import { Link } from 'react-router-dom';
import { LeaderBoard } from '../LeaderBoard/LeaderBoard';
import React = require('react');

export const OutTeam = () => {

	let [ teamName, setTeamName ] = React.useState('');

	return <div className="row">
		<div className="col-6 font-italic">
			<span>Enter your team name:</span>
			<input className="form-control mt-2" placeholder="Your mom" type="text" value={teamName} onChange={(event) => setTeamName(event.target.value)}/>
		</div>
		<div className="col-6 d-flex">
			<Link
				className="btn btn-primary w-100 d-flex align-items-center justify-content-center"
				to={teamName.trim()}
			>
				CLICK!
			</Link>
		</div>
		<div className="col-12">
			<LeaderBoard />
		</div>
	</div>;
};
