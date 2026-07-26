"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = __importDefault(require("../models/user"));
const team_1 = __importDefault(require("../models/team"));
const activity_1 = __importDefault(require("../models/activity"));
const leaderboard_1 = __importDefault(require("../models/leaderboard"));
const workout_1 = __importDefault(require("../models/workout"));
const router = (0, express_1.Router)();
function getApiBaseUrl() {
    const codespaceName = process.env.CODESPACE_NAME;
    return codespaceName
        ? `https://${codespaceName}-8000.app.github.dev`
        : 'http://localhost:8000';
}
function buildResponse(resource, items) {
    return {
        resource,
        apiBaseUrl: getApiBaseUrl(),
        items,
    };
}
router.get('/users', async (_req, res) => {
    const users = await user_1.default.find({}).lean();
    res.json(buildResponse('users', users));
});
router.get('/users/', async (_req, res) => {
    const users = await user_1.default.find({}).lean();
    res.json(buildResponse('users', users));
});
router.get('/teams', async (_req, res) => {
    const teams = await team_1.default.find({}).lean();
    res.json(buildResponse('teams', teams));
});
router.get('/teams/', async (_req, res) => {
    const teams = await team_1.default.find({}).lean();
    res.json(buildResponse('teams', teams));
});
router.get('/activities', async (_req, res) => {
    const activities = await activity_1.default.find({}).lean();
    res.json(buildResponse('activities', activities));
});
router.get('/activities/', async (_req, res) => {
    const activities = await activity_1.default.find({}).lean();
    res.json(buildResponse('activities', activities));
});
router.get('/leaderboard', async (_req, res) => {
    const leaderboard = await leaderboard_1.default.find({}).sort({ rank: 1 }).lean();
    res.json(buildResponse('leaderboard', leaderboard));
});
router.get('/leaderboard/', async (_req, res) => {
    const leaderboard = await leaderboard_1.default.find({}).sort({ rank: 1 }).lean();
    res.json(buildResponse('leaderboard', leaderboard));
});
router.get('/workouts', async (_req, res) => {
    const workouts = await workout_1.default.find({}).lean();
    res.json(buildResponse('workouts', workouts));
});
router.get('/workouts/', async (_req, res) => {
    const workouts = await workout_1.default.find({}).lean();
    res.json(buildResponse('workouts', workouts));
});
exports.default = router;
