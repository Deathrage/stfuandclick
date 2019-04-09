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
	laderBoard: LeaderBoard
}

export interface ClickAction extends Action<Actions> {
	teamClicks: number,
	myClicks: number,
}

export const actionSetTeam = (teamName: string): SetTeamAction => ({
	type: Actions.SET_TEAM,
	teamName: teamName,
});
export const actionSetLeaderBoard = (laderBoard: LeaderBoard): SetLeaderboardAction => ({
	type: Actions.LEADERBOARD,
	laderBoard: laderBoard,
});

export const actionClick = (myClicks: number, teamClicks: number): ClickAction => ({
	type: Actions.CLICK,
	myClicks,
	teamClicks,
});
