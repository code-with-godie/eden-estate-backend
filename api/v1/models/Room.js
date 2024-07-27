import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema(
  {
    estateID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: [true, 'please provide a post user'],
    },
    kingSize: {
      type: Number,
      default: 0,
    },
    queenSize: {
      type: Number,
      default: 0,
    },
    breakFast: {
      offer: {
        type: Boolean,
        default: false,
      },
      price: {
        type: Number,
      },
      bathrooms: {
        type: Number,
        required: [true, 'please provide number of bathrooms'],
      },
      guests: {
        type: Number,
        required: [
          true,
          'please provide number of guest that can fit into this room',
        ],
      },
      wifi: {
        type: Boolean,
        default: false,
      },
      airConditional: {
        type: Boolean,
        default: false,
      },
      laundaryServices: {
        type: Boolean,
        default: false,
      },
      tv: {
        type: Boolean,
        default: false,
      },
      booked: {
        type: Boolean,
        default: false,
      },
      image: {
        type: String,
        required: [true, 'please provide room image'],
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model?.rooms || mongoose.model('rooms', roomSchema);
