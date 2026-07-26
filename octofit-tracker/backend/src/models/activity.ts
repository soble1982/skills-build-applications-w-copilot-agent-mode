import mongoose, { Schema, Document } from 'mongoose';

export interface IActivity extends Document {
  type: string;
  duration: string;
  calories: number;
  userId?: mongoose.Types.ObjectId;
}

const activitySchema = new Schema<IActivity>({
  type: { type: String, required: true },
  duration: { type: String, required: true },
  calories: { type: Number, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
});

export default mongoose.model<IActivity>('Activity', activitySchema);
