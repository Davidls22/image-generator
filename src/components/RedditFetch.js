import React, { useState, useEffect } from 'react';
import RedditList from './RedditList';

export default function RedditFetch({searchTerm}) {
    const [redditData, setRedditData] = useState([]);

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(`https://www.reddit.com/r/all/search.json?q=${searchTerm}`);
            const data = await response.json();
            setRedditData(data.data.children);
          } catch (error) {
            console.error('Error fetching Reddit data:', error);
          }
        }
        if (searchTerm) {
          fetchData();
        }
      }, [searchTerm]);
    
      return <RedditList redditData={redditData} />;
    }
