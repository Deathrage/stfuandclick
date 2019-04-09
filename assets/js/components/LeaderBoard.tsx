import { connect } from 'react-redux';
import { State } from '../store/store';
import { LeaderBoard as LBInteface } from '../../../src/interfaces/Leaderboard';
import { MyScore } from './MyScore';
import { LeaderboardItem } from './LeaderBoardItem';
import React = require('react');

interface Props {
	data?: LBInteface,
	myTeam?: string,
}

const Component = (props: Props) => {
	let start = 0;
	let count = 7;

	// Adjust list if needed
	if (props.myTeam) {
		let myTeamIndex = props.data.findIndex(item => item.team === props.myTeam);
		let offset = myTeamIndex - count;
		if (offset >= 0) {
			start = offset + 4;
			if (start + count > props.data.length) {
				start = props.data.length - count;
			}
		}
	}

	return <div className="leaderboard">
		{props.myTeam
			? <MyScore />
			: <div className="ribbon-wrap mb-5">
				<h3 className="ribbon">
					TOP 10 Clickers
					<i></i>
					<i></i>
					<i></i>
					<i></i>
				</h3>
			</div>
		}
		<div className="leaderboard-item leaderboard-item--header">
			<span className="leaderboard-item--order"></span>
			<span className="leaderboard-item--team">TEAM</span>
			<span className="leaderboard-item--click">CLICKS</span>
		</div>
		{props.data.slice(start, start + count).map(item => <LeaderboardItem key={item.team} item={item} />)}
	</div>;
};

const mapStateToProps = (state: State, ownProps: Props) => {
	if (!state.laderBoard) return { data: [] };
	return {
		data: [].concat(state.laderBoard),
	};
};

export const LeaderBoard = connect(
	mapStateToProps
)(Component);
