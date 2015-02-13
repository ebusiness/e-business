var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var Inquiry = new Schema({

  name: {
    type: String,
    trim: true
  },

  email: {
    type: String,
    trim: true
  },

  subject: {
    type: String,
    trim: true
  },

  message: {
    type: String,
    trim: true
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
Inquiry.virtual('entity').get(function() {
  return 'inquiry';
});

// enable virtual output
Inquiry.set('toJSON', {
  virtuals: true
});
Inquiry.set('toObject', {
  virtuals: true
});

mongoose.model('Inquiry', Inquiry);