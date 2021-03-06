import { createStore } from 'redux';
import { reducer } from './reducer';
import { LeaderBoard } from '../../../src/interfaces/Leaderboard';
import { LeaderboardItem } from '../../../src/interfaces/LeaderboardItem';
import Cookies = require('js-cookie');

export interface State {
	leaderBoard: LeaderBoard;
	teamName: string;
	myTeam?: LeaderboardItem;
	myClicks?: number;
	sessionId: string;
};

export const initState: State = {
	leaderBoard: [],
	teamName: null,
	sessionId: Cookies.get('clickerId'),
	myTeam: {} as any,
};

export const store = createStore(reducer);
