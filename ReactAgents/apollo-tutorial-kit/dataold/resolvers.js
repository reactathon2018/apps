import {  View, Author, Post, Event } from './connectors';

const resolvers = {
  Query: {
    author() {
      //return { id: 1, firstName: 'Hello', lastName: 'World' };
      return Author.find({firstName:'Karthik'});
    },
    allAuthors() {
      return Author.find();
    },
    allPosts(){
      return [{ id: 1, title: 'ReactJS', text: 'Some text', views: 5}];
    },
    allEvents() {
        return Event.find();
    },
    getEvent(root, args) {
        return Event.find({eventType:args.eventType})
    }
  },
  Mutation: {
    addEvent: (root, args) => {
      const newEvent = { hack_name: args.hack_name, start_date: args.start_date, end_date: args.end_date };
      Event.insertMany(newEvent)
      return newEvent;
    }
  },

};

export default resolvers;