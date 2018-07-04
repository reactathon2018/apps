import { Event, Member } from './connector';

const events = [{
  eventId: "1",
  name: "REACTATHON",
  org: "NTS",
  startDate: "2018-07-02",
  endDate: "2018-07-04",
  details: "This is Reactathon Event.",
  type: "Current"
}, {
  eventId: "2",
  name: "HEALATHON",
  org: "CMB",
  startDate: "2018-07-12",
  endDate: "2018-07-14",
  details: "This is Healathon Event.",
  type: "Past"
}];
/*
let nextId = 3;

const members = [{
    memberId: "1",
    name: "Karthik",
    email: "karthik.ananthapadmanaban@verizon.com",
    location: "OTP",
    org: "NTS",
    registeredEvents: ["1", "2"]
}, {
       memberId: "2",
       name: "Anand",
       email: "anandakumar.nagarajan@verizon.com",
       location: "OTP",
       org: "NTS",
       registeredEvents: ["1"]
   }
];
*/
const resolvers = {
  Query: {
    getAllEvents() {
      //return Event.find();
      return events;
    },
    getRegisteredMembers(root, args) {
/*      const memberList = []
      var eventId;
      events.map((event) => {
        if(event.eventName == args.eventName){
            eventId = event.eventId;
        }
     });
      members.map((member) => {
          if(member.registeredEvents == eventId){
             memberList.push(member)
          }
      });
      return memberList;   */
    },
    getEvent(root, args) {
      const eventList = []
      events.map((event) => {
         if(event.name == args.name){
             eventList.push(event)
          }
         });
       return eventList;
      }
    },
     Mutation: {
          addEvent(root, args) {
            const newEvent = { id: nextId++, name: args.name, startDate: args.startDate, endDate: args.endDate };
            events.push(newEvent);
            return newEvent;
          },
        },
  };

export default resolvers;