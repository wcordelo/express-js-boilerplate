import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import authRoutes from './routes/auth';

const app = express();

// Apply middlware for CORS and JSON endpoing
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT, () =>
  console.log('Example app listening on port 3000!'),
);
