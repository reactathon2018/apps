// at the top with imports:
import Mongoose from 'mongoose';

// somewhere in the middle:
Mongoose.Promise = global.Promise;

Mongoose.connect('mongodb://reactagents:mongo_read1@ds125021.mlab.com:25021/reactathon');
Mongoose.connection.once('open', () => {
    console.log('connected to database');
})


const ViewSchema = Mongoose.Schema({
  postId: Number,
  views: Number,
});

const View = Mongoose.model('views', ViewSchema);

const AuthorSchema = Mongoose.Schema({
  firstName: String,
  lastName: String,
});

const Author = Mongoose.model('authors', AuthorSchema);



const PostSchema = Mongoose.Schema({
  title: String,
  text: String,
});

const Post = Mongoose.model('posts', PostSchema);

const EventSchema = Mongoose.Schema({
  eventId: String,
  name: String,
  org: String,
  startDate: String,
  endDate: String,
  details: String,
  type: String,
});

const Event = Mongoose.model('Events', EventSchema);



// at the bottom, add View to the exports
export { Author, Post, View, Event };