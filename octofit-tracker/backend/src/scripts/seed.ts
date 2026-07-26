import mongoose from 'mongoose';
import User from '../models/user';
import Team from '../models/team';
import Activity from '../models/activity';
import LeaderboardEntry from '../models/leaderboard';
import Workout from '../models/workout';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data.
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);
    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const teamA = await Team.create({
      name: 'North Stars',
      description: 'A high-energy endurance team focused on weekly challenges.',
      members: 5,
    });

    const teamB = await Team.create({
      name: 'Wave Riders',
      description: 'A balanced cardio and strength squad with strong community support.',
      members: 4,
    });

    const users = await User.create([
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

    await Activity.create([
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

    await LeaderboardEntry.create([
      { rank: 1, name: 'Alex Martinez', score: 980, userId: users[0]._id },
      { rank: 2, name: 'Jordan Lee', score: 912, userId: users[1]._id },
      { rank: 3, name: 'Priya Shah', score: 895, userId: users[2]._id },
    ]);

    await Workout.create([
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
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
