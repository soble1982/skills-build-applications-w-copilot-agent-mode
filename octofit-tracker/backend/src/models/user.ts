import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  role: string;
  teamId?: mongoose.Types.ObjectId;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  teamId: { type: Schema.Types.ObjectId, ref: 'Team' },
});

export default mongoose.model<IUser>('User', userSchema);
