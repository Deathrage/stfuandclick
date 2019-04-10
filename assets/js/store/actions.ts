import { Action } from 'redux';
import { LeaderBoard } from '../../../src/interfaces/Leaderboard';

export enum Actions {
	'SET_TEAM',
	'LEADERBOARD',
	'CLICK'
};

export interface SetTeamAction extends Action<Actions> {
	teamName: string;
}

export interface SetLeaderboardAction extends Action<Actions> {
	leaderBoard: LeaderBoard
}

export interface ClickAction extends Action<Actions> {
	teamClicks: number,
	myClicks: number,
}

// Templates for actions

export const actionSetTeam = (teamName: string): SetTeamAction => ({
	type: Actions.SET_TEAM,
	teamName: teamName,
});

export const actionSetLeaderBoard = (leaderBoard: LeaderBoard): SetLeaderboardAction => ({
	type: Actions.LEADERBOARD,
	leaderBoard: leaderBoard,
});

export const actionClick = (myClicks: number, teamClicks: number): ClickAction => ({
	type: Actions.CLICK,
	myClicks,
	teamClicks,
});
