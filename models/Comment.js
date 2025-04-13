// db.js
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://yli25@cluster0.kdegi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected!'))
.catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;


const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    parent_entry_id: Number,
    comment_date: ISOData(Date),
    comment_author: String,
    comment_body: String,
    mod_approved: Boolean
})

const Comment = mongoose.model('Comment', commentSchema);

const newComment = new Comment({ })