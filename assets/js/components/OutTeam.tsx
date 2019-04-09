import { Link } from 'react-router-dom';
import { LeaderBoard } from './LeaderBoard';
import React = require('react');

export class OutTeam extends React.Component<{}, {
	teamName: string
}> {
	state = {
		teamName: '',
	};

	render() {
		return <div className="row">
			<div className="col-6 font-italic">
				<span>Enter your team name:</span>
				<input className="form-control mt-2" placeholder="Your mom" type="text" value={this.state.teamName} onChange={(event) => this.setState({ teamName: event.target.value })}/>
			</div>
			<div className="col-6 d-flex">
				<Link
					className="btn btn-primary w-100 d-flex align-items-center justify-content-center"
					to={this.state.teamName}
				>
					CLICK!
				</Link>
			</div>
			<div className="col-12">
				<LeaderBoard />
			</div>
		</div>;
	}
};
