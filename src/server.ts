import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import { router } from './routes';
import cors from 'cors';
import path from 'path';

const app = express();

app.use(express.json());

const corsOptions = {
    origin: process.env.API_VERCEL, 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
  };

app.use(cors(corsOptions));

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