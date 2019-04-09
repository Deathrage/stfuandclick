import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, RouteComponentProps } from 'react-router-dom';
import * as React from 'react';
import { OutTeam } from './OutTeam';
import { InTeam } from './InTeam';
import { Quote } from './Quote';
import { TeamName } from './TeamName';
import { store } from '../store/store';
import { actionSetTeam } from '../store/actions';

export const Game = () => <Provider store={store}>
	<Router>
		<div className="quote-block">
			<Switch>
				<Route path="/:teamName" component={(props: RouteComponentProps) => {
					const teamName = props.match.params['teamName'];
					store.dispatch(actionSetTeam(teamName));
					return <TeamName
						teamName={teamName}
						teamUrl={window.location.host + props.location.pathname}
					/>;
				}} />
				<Route path="/" component={() => {
					store.dispatch(actionSetTeam(null));
					return <Quote text="It's realy simple, you just need to click as fas as you can." author="anonymous" />;
				}} />
			</Switch>
		</div>
		<div className="game-box border-primary rounded">
			<Switch>
				<Route path="/:teamName" component={InTeam} />
				<Route path="/" component={OutTeam} />
			</Switch>
			<div className="text-center pb-3 pt-3 font-italic">
				Want to be top? STFU and click!
			</div>
		</div>
	</Router>
</Provider>;
