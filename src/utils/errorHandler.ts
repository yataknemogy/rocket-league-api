import { Response } from 'express';

export const handleError = (error: any, res: Response, operation: string): void => {
    if (error.response) {
        console.error(`Error during ${operation}:`, error.response.data);
        res.status(error.response.status).json({ error: error.response.data });
    } else {
        console.error(`Unknown error during ${operation}:`, error.message);
        res.status(500).json({ error: `Unknown error: ${error.message}` });
    }
};
