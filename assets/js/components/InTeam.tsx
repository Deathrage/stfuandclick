import { sendClick } from '../helpers/sendClick';
import { LeaderBoard } from './LeaderBoard';
import { RouteComponentProps } from 'react-router';
import React = require('react');

export const InTeam = (props: RouteComponentProps) => <div className="row">
	<div className="col-12">
		<button className="btn btn-primary w-100 d-flex align-items-center justify-content-center clicker" onClick={() => sendClick()}>
			CLICK!
		</button>
	</div>
	<div className="col-12">
		<LeaderBoard myTeam={ props.match.params['teamName'] }/>
	</div>
</div>;
