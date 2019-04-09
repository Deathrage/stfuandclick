import { store } from '../store/store';
import { actionClick } from '../store/actions';
import { ClickResponse } from '../../../src/interfaces/ClickResponse';
import { ClickRequest } from '../../../src/interfaces/ClickRequest';

export const sendClick = (skipClick?: boolean) => {
	return new Promise(resolve => {
		let state = store.getState();
		fetch('/klik', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				team: state.teamName,
				session: state.sessionId,
				skipClick,
			} as ClickRequest),
		}).then(response => response.json()).then((clickResponse: ClickResponse) => {
			store.dispatch(actionClick(clickResponse['your_clicks'], clickResponse['team_clicks']));
			resolve();
		});
	});
};
