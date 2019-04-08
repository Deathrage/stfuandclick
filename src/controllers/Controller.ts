import { Request, Response } from 'express';

// There is no need for more controlers when all app has only trhee actions
export const Controller = {
	homepage: (req: Request, res: Response) => {
		return res.render('index');
	},
	getLeaderboard: (req: Request, res: Response) => {
		return res.send('leder');
	},
	click: (req: Request, res: Response) => {
		return res.send('klik');
	},
	notFound: (req: Request, res: Response) => {
		return res.sendStatus(404);
	},
};
