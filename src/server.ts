import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import { router } from './routes';
import cors from 'cors';
import path from 'path';

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
    next();
  });

app.use(express.json());

/*
const whitelist = [
    process.env.API_VERCEL,
    process.env.FRONTEND_VERCEL
];

const corsOptions: cors.CorsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error(`Origin not allowed by Cors: ${origin}`));
        }
    },
};
*/
app.use(cors());

app.use(router);

app.use(
    '/files', 
    express.static(path.resolve(__dirname, '..', 'tmp'))
);

app.use((e: Error, req: Request, res: Response, next: NextFunction) => {
    if(e instanceof Error){
        return res.status(400).json({
            error: e.message
        });
    }

    return res.status(500).json({
        status: 'error',
        message: 'internal server error'
    })
});

const port = process.env.PORT || 3111;
app.listen(port, () => console.log('Server is running on port 3111'));

export default app;