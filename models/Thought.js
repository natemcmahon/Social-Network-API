const { Schema, model } = require('mongoose');
const userSchema = require('./User');

// Schema to create User model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
        type: String,
        required: true,
        default: userSchema.username,
      },
    reactions: [
        {
            reactionId: {
                type: Schema.Types.ObjectId,
                default: () => new Types.ObjectId(),
            },
            reactionBody: {
                type: String,
                required: true,
                max_length: 280
            },
            username: {
                type: String,
                required: true,
            },
            createdAt: {
                type: Date,
                default: Date.now,
            }
        }
    ],
  },
  {
    toJSON: {
      virtual: true,
    },
  }
);

thoughtSchema
.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
