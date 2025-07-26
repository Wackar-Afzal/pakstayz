// models/User.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true,
  },
  birthDate: {
    type: String, // Format: 'MM-DD' (e.g., '05-22')
    required: false,
  },
  anniversaryDate: {
    type: String, // Format: 'MM-DD' (e.g., '11-15')
    required: false,
  },
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', UserSchema);
