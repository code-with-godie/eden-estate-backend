import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'please provide room ID'],
    },
    estateID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'posts',
      required: [true, 'please provide an estate ID'],
    },
    price: {
      type: Number,
      required: [true, 'please provide a post price'],
    },
    kingSize: {
      type: Number,
      default: 0,
    },
    queenSize: {
      type: Number,
      default: 0,
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
    conditional: {
      type: Boolean,
      default: false,
    },
    roomService: {
      type: Boolean,
      default: false,
    },
    tv: {
      type: Boolean,
      default: false,
    },
    balcony: {
      type: Boolean,
      default: false,
    },
    mountain: {
      type: Boolean,
      default: false,
    },
    forest: {
      type: Boolean,
      default: false,
    },
    soundProve: {
      type: Boolean,
      default: false,
    },
    ocean: {
      type: Boolean,
      default: false,
    },
    booked: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
      default: '',
    },
    url: {
      secure_url: {
        type: String,
        required: [true, 'please provide room secure url'],
      },
      public_id: {
        type: String,
        required: [true, 'please provide room public id'],
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model?.rooms || mongoose.model('rooms', roomSchema);
