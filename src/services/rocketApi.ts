import axios from 'axios';
import { Request, Response } from 'express';
import { handleError } from '../utils/errorHandler';
import dotenv from 'dotenv';

dotenv.config();

const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;
const RAPIDAPI_HOST = process.env.RAPIDAPI_HOST;

if (!RAPIDAPI_KEY || !RAPIDAPI_HOST) {
    throw new Error('RAPIDAPI_KEY or RAPIDAPI_HOST is not set in the .env file');
}

const API_BASE_URL = `https://${RAPIDAPI_HOST}`;

export const fetchPlayerProfileHandler = async (req: Request, res: Response): Promise<void> => {
    const { playerId } = req.params;

    try {
        const response = await axios.get(`${API_BASE_URL}/profile/${playerId}`, {
            headers: {
                'x-rapidapi-key': RAPIDAPI_KEY,
                'x-rapidapi-host': RAPIDAPI_HOST,
                'User-Agent': 'RapidAPI Playground',
                'Accept-Encoding': 'identity',
            },
        });

        res.json(response.data);
    } catch (error) {
        handleError(error, res, 'fetch player profile');
    }
};

export const fetchPlayerStatsHandler = async (req: Request, res: Response): Promise<void> => {
    const { playerId, stat } = req.params;

    try {
        const response = await axios.get(`${API_BASE_URL}/stat/${playerId}/${stat}`, {
            headers: {
                'x-rapidapi-key': RAPIDAPI_KEY,
                'x-rapidapi-host': RAPIDAPI_HOST,
                'User-Agent': 'RapidAPI Playground',
                'Accept-Encoding': 'identity',
            },
        });

        res.json(response.data);
    } catch (error) {
        handleError(error, res, 'fetch player stats');
    }
};

export const fetchPlayerProfilePreviewHandler = async (req: Request, res: Response): Promise<void> => {
    const { playerId } = req.params;

    try {
        const response = await axios.get(`${API_BASE_URL}/profile/${playerId}`, {
            headers: {
                'x-rapidapi-key': RAPIDAPI_KEY,
                'x-rapidapi-host': RAPIDAPI_HOST,
                'User-Agent': 'RapidAPI Playground',
                'Accept-Encoding': 'identity',
            },
        });

        const profile = response.data;

        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta property="og:title" content="${profile.name}'s Rocket League Profile" />
                <meta property="og:description" content="Platform: ${profile.platform}, Rank: ${profile.rank}" />
                <meta property="og:image" content="https://example.com/images/${profile.platform}.png" />
                <meta property="og:url" content="http://localhost:3000/api/rocket/profile/${playerId}" />
                <meta name="twitter:card" content="summary_large_image" />
                <title>${profile.name}'s Profile</title>
            </head>
            <body>
                <h1>${profile.name}'s Rocket League Profile</h1>
                <p>Platform: ${profile.platform}</p>
                <p>Rank: ${profile.rank}</p>
            </body>
            </html>
        `);
    } catch (error) {
        handleError(error, res, 'fetch player profile preview');
    }
};

export const fetchPlayerStatPreviewHandler = async (req: Request, res: Response): Promise<void> => {
    const { playerId, stat } = req.params;

    try {
        const response = await axios.get(`${API_BASE_URL}/stat/${playerId}/${stat}`, {
            headers: {
                'x-rapidapi-key': RAPIDAPI_KEY,
                'x-rapidapi-host': RAPIDAPI_HOST,
                'User-Agent': 'RapidAPI Playground',
                'Accept-Encoding': 'identity',
            },
        });

        const statData = response.data;

        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta property="og:title" content="Rocket League Stat: ${stat}" />
                <meta property="og:description" content="Player: ${playerId}, ${stat}: ${statData.value}" />
                <meta property="og:image" content="https://example.com/images/stats.png" />
                <meta property="og:url" content="http://localhost:3000/api/rocket/stat/${playerId}/${stat}" />
                <meta name="twitter:card" content="summary_large_image" />
                <title>${stat} for ${playerId}</title>
            </head>
            <body>
                <h1>Stat: ${stat}</h1>
                <p>Player: ${playerId}</p>
                <p>Value: ${statData.value}</p>
            </body>
            </html>
        `);
    } catch (error) {
        handleError(error, res, 'fetch player stat preview');
    }
};
