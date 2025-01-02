import React, { useState, useEffect } from 'react';

const Bookmark = () => {
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);

  useEffect(() => {
    // Fetch bookmarked posts from localStorage
    const storedBookmarks = localStorage.getItem('bookmarks');
    if (storedBookmarks) {
      setBookmarkedPosts(JSON.parse(storedBookmarks));
    }
  }, []);

  return (
    <div>
      <h2>Bookmarked Posts</h2>
      {bookmarkedPosts.length === 0 ? (
        <p>No bookmarked posts available</p>
      ) : (
        <ul>
          {bookmarkedPosts.map((post, index) => (
            <li key={index}>
              <h3>{post.heading}</h3>
              <p>{post.description}</p>
              <img src={post.image} alt={post.heading} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Bookmark;