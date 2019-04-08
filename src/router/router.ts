import * as express from 'express';
import * as path from 'path';
import { Controller } from '../controllers/Controller';

const router = express.Router();

router.use(express.static(path.resolve(process.cwd(), './public')));
router.get('/leaderboard', Controller.getLeaderboard);
router.post('/klik', Controller.click);
router.get('/:teamName?', Controller.homepage);
router.get('*', Controller.notFound);

export default router;
