import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import cookieParser from 'cookie-parser';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: ['https://incredible-wisp-0dbbfe.netlify.app'],
    // origin: ['http://localhost:5174'],
    credentials: true,
  }),
);

// application route..
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('server is running.');
});

// global Error Handler implement here
app.use(globalErrorHandler);

// not fount route implement here
app.use(notFound);

export default app;
