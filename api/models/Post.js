import mongoose from "mongoose";
import { Schema, model } from "mongoose";   

const postSchema = new Schema({
    title: String,
    summary: String,
    content: String,
    cover: String,
}, {
    timestamps: true
});


const Post = model('Post', postSchema);


export default Post;