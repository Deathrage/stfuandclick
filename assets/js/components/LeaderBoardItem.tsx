import { LeaderboardItem as LBInterface } from '../../../src/interfaces/LeaderboardItem';
import { connect } from 'react-redux';
import { State } from '../store/store';
import React = require('react');

interface Props {
	item: LBInterface,
	myTeamName?: string,
	myTeamClicks?: number,
}

const Component = (props: Props) => {
	return <div className={'leaderboard-item' + (props.item.team === props.myTeamName ? ' leaderboard-item--large' : '')}>
		<span className="leaderboard-item--order">{props.item.order}</span>
		<span className="leaderboard-item--team">{props.item.team}</span>
		<span className="leaderboard-item--click">{props.item.clicks || 0}</span>
	</div>;
};

const mapStateToProps = (state: State, ownProps: Props): Props => {
	return {
		...ownProps,
		myTeamName: state.teamName,
		myTeamClicks: state.myTeam.clicks,
	};
};

export const LeaderboardItem = connect(
	mapStateToProps
)(Component);
