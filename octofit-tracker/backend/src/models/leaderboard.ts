import mongoose, { Schema, Document } from 'mongoose';

export interface ILeaderboardEntry extends Document {
  rank: number;
  name: string;
  score: number;
  userId?: mongoose.Types.ObjectId;
}

const leaderboardSchema = new Schema<ILeaderboardEntry>({
  rank: { type: Number, required: true },
  name: { type: String, required: true },
  score: { type: Number, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
});

export default mongoose.model<ILeaderboardEntry>('LeaderboardEntry', leaderboardSchema);
