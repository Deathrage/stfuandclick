import { State, initState } from './store';
import { SetTeamAction, Actions, SetLeaderboardAction, ClickAction } from './actions';
import { setNewTeam } from '../helpers/setNewTeam';
import { reorderLeaderBoard } from '../helpers/reorderLeaderBoard';

export const reducer = (state: State = initState, action: Partial<SetTeamAction&SetLeaderboardAction&ClickAction>) => {
	switch (action.type) {
	case Actions.SET_TEAM:
		// Push new team to end
		state = setNewTeam(state, action.teamName);
		break;
	case Actions.LEADERBOARD:
		state = {
			...state,
			leaderBoard: action.leaderBoard,
		};
		break;
	case Actions.CLICK:
		// find my team inside leaderboard
		let myTeamIndex = state.leaderBoard.findIndex(item => item.team === state.teamName);
		let myTeam = state.leaderBoard[myTeamIndex];
		myTeam.clicks = action.teamClicks;
		// CFind new order
		let orderedItems = reorderLeaderBoard(state.leaderBoard);
		// put reference to the object to root to make it more accesible
		state = {
			...state,
			leaderBoard: orderedItems,
			myClicks: action.myClicks,
			myTeam: myTeam,
		};
		break;
	}
	return state;
};
