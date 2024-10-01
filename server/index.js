import express from 'express';
import cors from 'cors';
import wikipediaRouter from './routers/wikipedia.js';
import userRouter from './routers/user.js';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use('/', wikipediaRouter);
app.use('/', userRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
