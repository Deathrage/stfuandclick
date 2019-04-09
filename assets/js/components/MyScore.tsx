import { State } from '../store/store';
import { connect } from 'react-redux';
import { GetMyScore } from '../helpers/getMyScore';
import React = require('react');

interface Props {
	myClicks?: number,
	teamClicks?: number,
}

const Component = (props: Props) => {

	// Call fake click when score is not loaded yet
	if (!props.myClicks && !props.teamClicks) {
		GetMyScore();
	}

	return <div className="score row pt-4 pb-4">
		<div className="col-6 score-collumn">
			Your clicks:
			<span className="score-collumn--score">{props.myClicks || 0}</span>
		</div>
		<div className="col-6 score-collumn">
			Team clicks:
			<span className="score-collumn--score">{props.teamClicks || 0}</span>
		</div>
	</div>;
};

const mapStateToProps = (state: State, ownProps: Props): Props => {
	return {
		myClicks: state.myClicks,
		teamClicks: state.myTeam.clicks,
	};
};

export const MyScore = connect(
	mapStateToProps
)(Component);
