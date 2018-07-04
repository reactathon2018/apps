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
        return Event.find({org:'VES'});
    },
    event(root, args) {
        return Event.find({org:args.org})
    }
  }

};

export default resolvers;