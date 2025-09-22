import mongoose from 'mongoose';

const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      default: 'Gest',
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
    },
    coursc: {
      type: String,
    },
  },
  { strict: false }
);

const Student = mongoose.model('Student', studentSchema);

export default Student;
