import { Router } from 'express';
import {
    fetchPlayerProfileHandler,
    fetchPlayerProfilePreviewHandler,
    fetchPlayerStatPreviewHandler,
    fetchPlayerStatsHandler
} from '../services/rocketApi';

const router = Router();

router.get('/profile/:playerId', fetchPlayerProfileHandler);
router.get('/stat/:playerId/:stat', fetchPlayerStatsHandler);
router.get('/profile/:playerId/preview', fetchPlayerProfilePreviewHandler);
router.get('/stat/:playerId/:stat/preview', fetchPlayerStatPreviewHandler);

export default router;
