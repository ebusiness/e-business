var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var Picture = new Schema({

  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  name: {
    type: String,
    trim: true
  },

  type: {
    type: String,
    trim: true
  },

  fileName: {
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
Picture.virtual('entity').get(function() {
  return 'picture';
});

// enable virtual output
Picture.set('toJSON', {
  virtuals: true
});
Picture.set('toObject', {
  virtuals: true
});

mongoose.model('Picture', Picture);