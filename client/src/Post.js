



import React from 'react';
import { format } from 'date-fns';

function Post({ title, summary, createdAt, cover, content, author }) {
  let formattedDate = '';
  
  if (createdAt) {
    try {
      formattedDate = format(new Date(createdAt), 'MMMM dd, yyyy HH:mm');
    } catch (error) {
      console.error('Invalid date:', error);
      formattedDate = 'Invalid date';
    }
  } else {
    formattedDate = 'No date available';
  }

  return (
    <div className='post'>
      <div className="image">
      <img src={'http://localhost:4000/'+cover} alt="" />
      </div>
      <div className="texts">
        <h2>{title}</h2>
        <p className="info">
          <a href={`/author/${author?._id}`} className="author">{author?.username || 'Unknown author'}</a>
          <time>{formattedDate}</time>
        </p>
        <p className='summary'>{summary}</p> 
      </div>
    </div>
  );
}

export default Post;


