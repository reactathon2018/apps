const channels = [{
  id: 1,
  name: 'soccer',
}, {
  id: 2,
  name: 'baseball',
}];

let nextId = 3;

import { PubSub } from 'graphql-subscriptions';

export const pubsub = new PubSub();

const SOMETHING_CHANGED_TOPIC = 'something_changed';

export const resolvers = {
  Query: {
    channels: () => {
      return channels;
    },
  },
  Mutation: {
      addChannel: (root, args) => {
        const newChannel = { id: nextId++, name: args.name };
        channels.push(newChannel);
        return newChannel;
      },
    },
    Subscription: {
        somethingChanged: {
          subscribe: () => pubsub.asyncIterator(SOMETHING_CHANGED_TOPIC),
        },
      },
};

pubsub.publish(SOMETHING_CHANGED_TOPIC, { somethingChanged: { id: "123" }});
