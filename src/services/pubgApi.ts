import axios from 'axios';
import dotenv from 'dotenv';
import { Request, Response } from 'express';
import { handleError } from '../utils/errorHandler';

dotenv.config();

const PUBG_API_KEY = process.env.PUBG_API_KEY;
const PUBG_API_HOST = process.env.PUBG_API_HOST;

if (!PUBG_API_KEY || !PUBG_API_HOST) {
    throw new Error('PUBG_API_KEY or PUBG_API_HOST is not set in the .env file');
}

export const fetchPubgPlayerStats = async (req: Request, res: Response) => {
    try {
        const { playerName } = req.params;
        const response = await axios.get(`${PUBG_API_HOST}/shards/steam/players?filter[playerNames]=${playerName}`, {
            headers: {
                Authorization: `Bearer ${PUBG_API_KEY}`,
                Accept: 'application/vnd.api+json',
            },
        });

        res.json(response.data);
    } catch (error: any) {
        handleError(error, res, 'fetch PUBG player stats');
    }
};

export const fetchPubgPlayerMatches = async (req: Request, res: Response) => {
    try {
        const { playerId } = req.params;
        const response = await axios.get(`${PUBG_API_HOST}/shards/steam/players/${playerId}/matches`, {
            headers: {
                Authorization: `Bearer ${PUBG_API_KEY}`,
                Accept: 'application/vnd.api+json',
            },
        });

        res.json(response.data);
    } catch (error: any) {
        handleError(error, res, 'fetch PUBG player matches');
    }
};

export const fetchPubgMatchDetails = async (req: Request, res: Response) => {
    try {
        const { matchId } = req.params;
        const response = await axios.get(`${PUBG_API_HOST}/shards/steam/matches/${matchId}`, {
            headers: {
                Authorization: `Bearer ${PUBG_API_KEY}`,
                Accept: 'application/vnd.api+json',
            },
        });

        res.json(response.data);
    } catch (error: any) {
        handleError(error, res, 'fetch PUBG match details');
    }
};

export const fetchPubgMaps = async (req: Request, res: Response) => {
    try {
        const response = await axios.get(`${PUBG_API_HOST}/maps`, {
            headers: {
                Authorization: `Bearer ${PUBG_API_KEY}`,
                Accept: 'application/vnd.api+json',
            },
        });

        res.json(response.data);
    } catch (error: any) {
        handleError(error, res, 'fetch PUBG maps');
    }
};
