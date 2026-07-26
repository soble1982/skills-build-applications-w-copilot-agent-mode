import express from 'express';
import './config/database';
import apiRoutes from './routes/api';

const app = express();
const port = Number(process.env.PORT || 8000);

app.use(express.json());
app.use('/api', apiRoutes);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'octofit-tracker-backend' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Backend listening on port ${port}`);
});
