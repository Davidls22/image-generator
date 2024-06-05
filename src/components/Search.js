import React, {useState, useRef }from 'react'
import RedditFetch from './RedditFetch';

export default function Search() {
    const inputRef = useRef(null);
    const [searchTerm, setSearchTerm] = useState("")

  return (
    <>
    <div style={{padding:'10px'}}>Search</div>
    <input
    type="text"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    ref={inputRef}
    style={{margin:'10px', width:'200px'}}
    />
   <RedditFetch searchTerm={searchTerm} />
    </>
  )
}
