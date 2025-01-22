import mongoose from 'mongoose';

const reserveSchema = new mongoose.Schema(
  {
    roomID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'rooms',
      required: [true, 'please provide a room ID'],
    },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: [true, 'please provide a user ID'],
    },
    dates: {
      type: [String],
    },
    status: {
      type: String,
      enum: ['pending', 'paid', 'cancelled'],
      default: 'pending',
    },
  },
  { timestamps: true }
);

export default mongoose.model?.rooms ||
  mongoose.model('reserves', reserveSchema);
