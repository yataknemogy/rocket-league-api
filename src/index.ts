import express from 'express';
import dotenv from 'dotenv';
import rocketRoutes from './routes/rocketRoutes';
import pubgRoutes from "./routes/pubgRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/rocket', rocketRoutes);
app.use('/api/pubg', pubgRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Tracker API Integration!');
});

app.use((err: any, req: any, res: any, next: any) => {
    console.error('Unhandled error:', err.message || err);
    res.status(500).json({ error: err.message || 'Internal Server Error' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

process.on('uncaughtException', (err) => {
    console.error('Uncaught exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled rejection:', reason);
});
