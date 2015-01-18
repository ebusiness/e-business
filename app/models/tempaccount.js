var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var TempAccount = new Schema({

  // Email
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },

  // Password
  password: {
    type: String,
    trim: true,
    required: true
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

  // Account Type
  type: {
    type: String,
    trim: true,
    required: true,
    default: 'engineer'
  },

  // Create Date
  createDate: {
    type: Date,
    default: Date.now,
    expires: 60 * 60
  }

});

mongoose.model('TempAccount', TempAccount);