import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'please provide a post title'],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: [true, 'please provide a post user'],
    },
    price: {
      type: Number,
      required: [true, 'please provide a post price'],
    },
    image: {
      type: String,
      required: [true, 'please provide a post image'],
    },
    rooms: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'rooms',
    },
    country: {
      ISOCode: {
        type: String,
        required: [true, 'please provide a post country isocode '],
      },
      name: {
        type: String,
        required: [true, 'please provide a post country name '],
      },
    },
    state: {
      ISOCode: {
        type: String,
        required: [true, 'please provide a post state isocode '],
      },
      name: {
        type: String,
        required: [true, 'please provide a post state name '],
      },
    },
    city: {
      type: String,
      required: [true, 'please provide a post city '],
    },
    coodinates: {
      latitude: {
        type: Number,
        required: [true, 'please provide a post latitude'],
      },
      longitude: {
        type: Number,
        required: [true, 'please provide a post longitude'],
      },
    },

    type: {
      type: String,
      enum: ['buy', 'rent'],
      default: 'rent',
    },
    property: {
      type: String,
      enum: ['apartment', 'house', 'condo', 'land'],
      default: 'apartment',
    },
    desc: {
      type: String,
    },
    utilities: {
      type: String,
      default: '',
    },
    pet: {
      type: String,
      default: 'bet are allowed',
    },
    income: {
      type: String,
      default: '',
    },
    size: {
      type: Number,
    },
    school: {
      type: Number,
    },
    bus: {
      type: Number,
    },
    restaurant: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model?.posts || mongoose.model('posts', postSchema);
