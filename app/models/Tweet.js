const { Model } = require('objection');
const User = require('./User');

class Tweet extends Model {
  static get tableName() {
    return 'tweets';
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'tweets.user_id',
          to: 'users.id'
        }
      }
    };
  }
}

module.exports = Tweet;