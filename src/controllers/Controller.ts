import { Request, Response } from 'express';
import { LeaderBoardResponse } from '../interfaces/LeaderboardResponse';
import { ClickResponse } from '../interfaces/ClickResponse';
import { ClickRequest } from '../interfaces/ClickRequest';
import { Team } from '../models/Team';
import { TeamMember } from '../models/TeamMember';
import { LeaderboardItem } from '../interfaces/LeaderboardItem';

// There is no need for more controlers when all app has only trhee actions
export const Controller = {
	homepage: async (req: Request, res: Response) => {
		// If accesing /:teamName page, check if team exists -> it needs to be in leaderboard
		if (req.params['teamName']) {
			await Team.getOrCreate(req.params['teamName']);
		}
		// Simply return index view
		return res.render('index');
	},
	getLeaderboard: async (req: Request, res: Response) => {
		// Fetch items, sort them, number them
		let items = await Team.getLeaderBoard() as LeaderboardItem[];
		let orderedItems = items.sort((a, b) => Number(a.clicks) > Number(b.clicks) ? -1 : 1);
		orderedItems.forEach((item, index) => {
			item.order = index + 1;
		});

		return res.send(JSON.stringify({
			leaderBoard: orderedItems,
		} as LeaderBoardResponse));
	},
	click: async (req: Request, res: Response) => {
		let body = req.body as ClickRequest;

		// Fetch my team
		let team = await Team.getOrCreate(body.team);

		// Fetch me, update my clicks
		let member = await TeamMember.getOrCreate(body.session, team.id);
		// Clicking is skiped when data are fetch just to be displayed
		if (body.skipClick !== true) {
			member.clicks++;
		}
		await TeamMember.update(member);

		// Sum team clisks
		let teamClicksRaw = await TeamMember.teamClicks(team.id);
		let teamClicks = Number(teamClicksRaw[0]['sum']);

		return res.send(JSON.stringify({
			'team_clicks': teamClicks,
			'your_clicks': member.clicks,
		} as ClickResponse));
	},
	notFound: (req: Request, res: Response) => {
		return res.sendStatus(404);
	},
};
