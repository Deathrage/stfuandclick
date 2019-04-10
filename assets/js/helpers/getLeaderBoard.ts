import { LeaderBoardResponse } from '../../../src/interfaces/LeaderboardResponse';
import { LeaderBoard } from '../../../src/interfaces/Leaderboard';
/**
 * Retrieves leadeboard from server
 * @returns Promise<LeaderBoard>
 */
export const getLeaderBoard = (): Promise<LeaderBoard> => {
	return new Promise(resolve => {
		fetch('/leaderboard').then(response => response.json()).then((json: LeaderBoardResponse) => resolve(json.leaderBoard));
	});
};
