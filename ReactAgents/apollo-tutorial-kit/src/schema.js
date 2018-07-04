import { makeExecutableSchema } from 'graphql-tools';
//import mocks from './mocks';
import resolvers from './resolvers'

const typeDefs = `
type Query {
  getAllEvents: [Event]
  getRegisteredMembers(eventName: String): [Member]
  getEvents(eventType: String): [Event]
}

type Mutation {
  addEvent(name: String,startDate: String endDate: String): Event
}

type Event {
    eventId: String,
    name: String,
    org: String,
    startDate: String,
    endDate: String,
    details: String,
    eventType: String,
}

type Member {
    memberId: String,
    name: String,
    email: String,
    location: String,
    org: String,
    eventName: String,
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

//addMockFunctionsToSchema({ schema, mocks });

export default schema;
