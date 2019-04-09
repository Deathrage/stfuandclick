import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Layout } from './layouts/layout';
import { Game } from './components/Game';
import { getLeaderBoard } from './helpers/getLeaderBoard';
import { store } from './store/store';
import { actionSetLeaderBoard } from './store/actions';

getLeaderBoard().then(leaderBoard => {
	store.dispatch(actionSetLeaderBoard(leaderBoard));
});

ReactDOM.render(<Layout>
	<Game />
</Layout>, document.getElementById('app'));
