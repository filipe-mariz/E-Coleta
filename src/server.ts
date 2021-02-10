import express from 'express';
import routes from './routes';
import './database/connection';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

console.log('Server is run');

app.listen(3333);
