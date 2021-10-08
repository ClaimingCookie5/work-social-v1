const mongoose = require('mongoose');
// const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'user name required'],
      unique: true,
      trim: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: [true, 'email required'],
      unique: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, 'is invalid'],
      // validate: { validator: validator.isEmail(), message: 'Invalid email.' },
    },
    password: {
      type: String,
      required: [true, 'password required'],
      trim: true,
      minlength: [8, 'minimum 8 characters'],
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
