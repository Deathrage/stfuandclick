import { State } from '../store/store';
/**
 * Add new team to leaderboard
 * @param  {State} state
 * @param  {string} teamName
 * @returns State
 */
export const setNewTeam = (state: State, teamName: string): State => {
	state.leaderBoard.push({
		team: teamName,
		clicks: 0,
		order: state.leaderBoard.length,
	});
	return {
		...state,
		teamName: teamName,
	};
};
