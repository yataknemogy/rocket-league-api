import { Router } from 'express';
import {
    fetchPubgPlayerStats,
    fetchPubgPlayerMatches,
    fetchPubgMatchDetails,
    fetchPubgMaps,
} from '../services/pubgApi';

const router = Router();

router.get('/player/:playerName', fetchPubgPlayerStats);
router.get('/player/:playerId/matches', fetchPubgPlayerMatches);
router.get('/match/:matchId', fetchPubgMatchDetails);
router.get('/maps', fetchPubgMaps);

export default router;
