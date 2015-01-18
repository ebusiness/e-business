var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var User = new Schema({

  // Primary email
  email: {
    type: String,
    trim: true
  },

  // Password
  password: {
    type: String,
    trim: true
  },

  // User type
  type: {
    type: String,
    trim: true
  },

  // First Name
  firstName: {
    type: String,
    trim: true
  },

  // Last Name
  lastName: {
    type: String,
    trim: true
  },

  // Photo
  photo: {
    type: String,
    trim: true
  },

  // Title
  title: {
    type: String,
    trim: true
  },

  // Last login date
  lastLogin: {
    type: Date
  },

  // Logic delete flag
  logicDelete: {
    type: Boolean,
    default: false
  },

  // Create date
  createDate: {
    type: Date,
    default: Date.now
  }
});

// Entity type
User.virtual('entity').get(function() {
  return 'user';
});

// enable virtual output
User.set('toJSON', {
  virtuals: true
});
User.set('toObject', {
  virtuals: true
});

mongoose.model('User', User);