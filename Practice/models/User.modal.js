import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      default: 'Guest',
    },
    age: {
      type: Number,
      default: null,
    },
    status: {
      type: String,
      default: null,
    },
  },
  { strict: false }
);

const User = mongoose.model('User', userSchema);

export default User;
