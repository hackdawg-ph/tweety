import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment'
import Layout from '../components/Layout';

Home.propTypes = {
  tweets: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default function Home({ tweets }) {
  return (
    <Layout title="Home">
      <div>
        {tweets.map(tweet => (
          <div key={tweet.id} className="flex flex-row px-6 py-4 border-b border-gray-700">
            <div className="w-12 h-12">
              <img className="w-12 h-12 rounded-full" src={tweet.user.avatar} alt="" />
            </div>
            <div className="ml-5">
              <div className="inline-flex">
                <h4 className="text-white">{tweet.user.name}</h4>
                <p className="ml-4 text-gray-600 text-sm">@{tweet.user.username}</p>
                <p className="mx-2 text-gray-600 text-sm">.</p>
                <p className="text-gray-600 text-sm">
                  {moment(tweet.created_at).fromNow()}
                </p>
              </div>

              <p className="mt-2 text-white text-sm">{tweet.body}</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const knex = require('knex');
  const { Model } = require('objection');
  const db = knex(require('../knexfile').development);
  Model.knex(db);

  const Tweet = require('../app/models/Tweet');
  const tweets = await Tweet.query().withGraphFetched('user');

  return {
    props: {
      tweets: JSON.parse(JSON.stringify(tweets)),
    },
  };
}
