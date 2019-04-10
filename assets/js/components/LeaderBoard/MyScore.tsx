import { State } from '../../store/store';
import { connect } from 'react-redux';
import { GetMyScore } from '../../helpers/getMyScore';
import React = require('react');

interface Props {
	myClicks?: number,
	teamClicks?: number,
}

class Component extends React.Component<Props, {}> {
	componentDidMount() {
		// Call fake click when score is not loaded yet
		if (!this.props.myClicks && !this.props.teamClicks) {
			GetMyScore();
		}
	}
	render() {
		return <div className="score row pt-4 pb-4">
			<div className="col-6 score-collumn">
				Your clicks:
				<span className="score-collumn--score">{this.props.myClicks || 0}</span>
			</div>
			<div className="col-6 score-collumn">
				Team clicks:
				<span className="score-collumn--score">{this.props.teamClicks || 0}</span>
			</div>
		</div>;
	}
}

const mapStateToProps = (state: State): Props => {
	return {
		myClicks: state.myClicks,
		teamClicks: state.myTeam.clicks,
	};
};

export const MyScore = connect(
	mapStateToProps
)(Component);
