import { Router } from 'express';
import User from '../models/user';
import Team from '../models/team';
import Activity from '../models/activity';
import LeaderboardEntry from '../models/leaderboard';
import Workout from '../models/workout';

const router = Router();

function getApiBaseUrl() {
  const codespaceName = process.env.CODESPACE_NAME;
  return codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : 'http://localhost:8000';
}

function buildResponse(resource: string, items: Array<Record<string, unknown>>) {
  return {
    resource,
    apiBaseUrl: getApiBaseUrl(),
    items,
  };
}

router.get('/users', async (_req, res) => {
  const users = await User.find({}).lean();
  res.json(buildResponse('users', users));
});

router.get('/users/', async (_req, res) => {
  const users = await User.find({}).lean();
  res.json(buildResponse('users', users));
});

router.get('/teams', async (_req, res) => {
  const teams = await Team.find({}).lean();
  res.json(buildResponse('teams', teams));
});

router.get('/teams/', async (_req, res) => {
  const teams = await Team.find({}).lean();
  res.json(buildResponse('teams', teams));
});

router.get('/activities', async (_req, res) => {
  const activities = await Activity.find({}).lean();
  res.json(buildResponse('activities', activities));
});

router.get('/activities/', async (_req, res) => {
  const activities = await Activity.find({}).lean();
  res.json(buildResponse('activities', activities));
});

router.get('/leaderboard', async (_req, res) => {
  const leaderboard = await LeaderboardEntry.find({}).sort({ rank: 1 }).lean();
  res.json(buildResponse('leaderboard', leaderboard));
});

router.get('/leaderboard/', async (_req, res) => {
  const leaderboard = await LeaderboardEntry.find({}).sort({ rank: 1 }).lean();
  res.json(buildResponse('leaderboard', leaderboard));
});

router.get('/workouts', async (_req, res) => {
  const workouts = await Workout.find({}).lean();
  res.json(buildResponse('workouts', workouts));
});

router.get('/workouts/', async (_req, res) => {
  const workouts = await Workout.find({}).lean();
  res.json(buildResponse('workouts', workouts));
});

export default router;
