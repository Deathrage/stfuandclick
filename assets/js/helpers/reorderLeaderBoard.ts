import { LeaderboardItem } from '../../../src/interfaces/LeaderboardItem';
/**
 * Reorder's leaderboard
 * @param  {LeaderboardItem[]} leaderBoard
 * @returns LeaderboardItem
 */
export const reorderLeaderBoard = (leaderBoard: LeaderboardItem[]): LeaderboardItem[] => {
	return leaderBoard.sort((a, b) => {
		let numA = Number(a.clicks);
		let numB = Number(b.clicks);
		if (numA > numB) {
			return -1;
		} else if (numA < numB) {
			return 1;
		} else {
			return 0;
		}
	}).map((item, index) => {
		item.order = index + 1;
		return item;
	});
};
