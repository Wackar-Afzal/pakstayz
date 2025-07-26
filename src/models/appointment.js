// models/Appointment.js
import mongoose from 'mongoose';

const AppointmentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
  },
  selfServices: {
    type: JSON, 
    required: true,
  },
  memberServices: {
    type: JSON, 
  },
  appDate: {
    type: String, 
    required: true,
  },
  appTime: {
    type: String, 
    required: true,
  },
  message: {
    type: String,
  },
  totalBill: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, 
  },
}, { timestamps: true }); 

export default mongoose.models.Appointment || mongoose.model('Appointment', AppointmentSchema);