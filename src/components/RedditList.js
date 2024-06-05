import React from 'react'
import './RedditList.css';

export default function RedditList({redditData}) {
    return (
        <div>
          {redditData.map((post, index) => (
            <div key={index} className="reddit-post">
              <h3>{post.data.title}</h3>
              <p>{post.data.selftext}</p>
              <a href={post.data.url} target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
          ))}
        </div>
      );
          }
