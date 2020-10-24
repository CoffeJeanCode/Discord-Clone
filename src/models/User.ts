import mongoose, { Schema, model } from 'mongoose';
interface userDoc extends mongoose.Document {
  username: string;
  email: string;
  password: string;
  roles: string[];
}

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model<userDoc>('User', userSchema);
