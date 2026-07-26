"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = __importDefault(require("../models/user"));
const team_1 = __importDefault(require("../models/team"));
const activity_1 = __importDefault(require("../models/activity"));
const leaderboard_1 = __importDefault(require("../models/leaderboard"));
const workout_1 = __importDefault(require("../models/workout"));
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
/**
 * Seed the octofit_db database with test data.
 */
async function seedDatabase() {
    try {
        await mongoose_1.default.connect(connectionString);
        console.log('Connected to octofit_db');
        await Promise.all([
            user_1.default.deleteMany({}),
            team_1.default.deleteMany({}),
            activity_1.default.deleteMany({}),
            leaderboard_1.default.deleteMany({}),
            workout_1.default.deleteMany({}),
        ]);
        const teamA = await team_1.default.create({
            name: 'North Stars',
            description: 'A high-energy endurance team focused on weekly challenges.',
            members: 5,
        });
        const teamB = await team_1.default.create({
            name: 'Wave Riders',
            description: 'A balanced cardio and strength squad with strong community support.',
            members: 4,
        });
        const users = await user_1.default.create([
            {
                name: 'Alex Martinez',
                email: 'alex@example.com',
                role: 'Captain',
                teamId: teamA._id,
            },
            {
                name: 'Jordan Lee',
                email: 'jordan@example.com',
                role: 'Member',
                teamId: teamB._id,
            },
            {
                name: 'Priya Shah',
                email: 'priya@example.com',
                role: 'Member',
                teamId: teamA._id,
            },
        ]);
        await activity_1.default.create([
            {
                type: 'Run',
                duration: '30m',
                calories: 320,
                userId: users[0]._id,
            },
            {
                type: 'Strength',
                duration: '45m',
                calories: 250,
                userId: users[1]._id,
            },
            {
                type: 'Cycling',
                duration: '60m',
                calories: 410,
                userId: users[2]._id,
            },
        ]);
        await leaderboard_1.default.create([
            { rank: 1, name: 'Alex Martinez', score: 980, userId: users[0]._id },
            { rank: 2, name: 'Jordan Lee', score: 912, userId: users[1]._id },
            { rank: 3, name: 'Priya Shah', score: 895, userId: users[2]._id },
        ]);
        await workout_1.default.create([
            {
                title: 'HIIT Circuit',
                level: 'Intermediate',
                duration: '35m',
                focus: 'Cardio',
            },
            {
                title: 'Core Recovery',
                level: 'Beginner',
                duration: '20m',
                focus: 'Mobility',
            },
            {
                title: 'Power Strength',
                level: 'Advanced',
                duration: '50m',
                focus: 'Strength',
            },
        ]);
        console.log('Database seeding complete');
        await mongoose_1.default.disconnect();
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}
seedDatabase();
