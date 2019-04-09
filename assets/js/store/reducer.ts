import { State, initState } from './store';
import { SetTeamAction, Actions, SetLeaderboardAction, ClickAction } from './actions';

export const reducer = (state: State = initState, action: Partial<SetTeamAction&SetLeaderboardAction&ClickAction>) => {
	if (action.type === Actions.SET_TEAM) {
		state = {
			...state,
			teamName: action.teamName,
		};
	} else if (action.type === Actions.LEADERBOARD) {
		state = {
			...state,
			laderBoard: action.laderBoard,
		};
	} else if (action.type === Actions.CLICK) {
		// find my team inside leaderboard
		let myTeamIndex = state.laderBoard.findIndex(item => item.team === state.teamName);
		let myTeam = state.laderBoard[myTeamIndex];
		// put reference to the object to root to make it more accesible
		myTeam.clicks = action.teamClicks;
		state = {
			...state,
			myClicks: action.myClicks,
			myTeam: myTeam,
		};
		// Check if should switch places
		// TODO: oredering
		if (myTeamIndex !== 0 && myTeam.clicks > state.laderBoard[myTeamIndex - 1].clicks) {
			let oldTeam = state.laderBoard[myTeamIndex - 1];
			// switch their order in property
			myTeam.order--;
			oldTeam.order++;
			// swtich their rendering order
			state.laderBoard[myTeamIndex - 1] = myTeam;
			state.laderBoard[myTeamIndex] = oldTeam;
		}
	}
	return state;
};
