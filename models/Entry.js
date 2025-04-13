const mongoose = require('./db');

const entrySchema = new mongoose.SchemaType({
    id: Number,
    name: String,
    os: String,
    category: String,
    image: String,
    ColorContrast: Number,
    ColorContrastGrade: String,
    MissedElements: Number,
    ScreenreaderCapable: String,
    TextSize: Number,
    TextSizeGrade: String
})

module.exports = mongoose.model('Entry', entrySchema);

const commentSchema = new mongoose.Schema({
    parent_entry_id: Number,
    comment_date: ISOData(Date),
    comment_author: String,
    comment_body: String,
    mod_approved: Boolean
})

const Comment = mongoose.model('Comment', commentSchema);

const newComment = new Comment({ })