const { Model } = require('objection');
const Tweet = require('./Tweet');

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static get relationMappings() {
    return {
      tweets: {
        relation: Model.HasManyRelation,
        modelClass: Tweet,
        join: {
          from: 'users.id',
          to: 'tweets.user_id'
        }
      }
    }
  }
}

module.exports = User;