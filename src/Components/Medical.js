import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Dashboard.css';

const Medical = () => {
  const [stories, setStories] = useState({
    food: [],
    medical: [],
    fruits: [],
    world: [],
    india: []
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Fetch stories from localStorage on component mount
  useEffect(() => {
    const storedStories = JSON.parse(localStorage.getItem('stories')) || {
      food: [],
      medical: [],
      fruits: [],
      world: [],
      india: []
    };
    setStories(storedStories);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleBookmark = () => {
    navigate('/Bookmark'); // Navigate to bookmark page
  };

  const handleAddStory = () => {
    navigate('/Addstory'); // Navigate to the Addstory page without index
  };

  const handleEditStory = (index) => {
    navigate('/Addstory', { state: { storyIndex: index } }); // Pass the story index as state
  };

  const viewStory = (index) => {
    navigate(`/Viewstory/${index}`); // Navigate to view story by index
  };
  

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/'); // Redirect to home page
  };

  return (
    <div>
      {/* Top Header Section */}
      <div id="dashboard-header">
        <button id="book" onClick={handleBookmark}>Bookmark</button>
        <button id="add" onClick={handleAddStory}>Add Story</button>
        <button className="hamburger-btn" onClick={toggleMenu}>
          <img src={`${process.env.PUBLIC_URL}/Vector.png`} alt="Menu" />
        </button>
      </div>

      {/* Popup Menu for Hamburger */}
      {menuOpen && (
        <div className="popup-menu">
          <p>Your Name</p>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      )}

      



      

        {/* Medical Stories */}
        <h2>Medical Stories</h2>
        <div id="stories-grid">

        {stories.medical && stories.medical.length > 0 ? (
          stories.medical.map((story, index) => (
            <button id="view-btn" onClick={() => viewStory(index)}>

            <div key={index}  id="story-card">
              <h3>{story.heading}</h3>
              <p>{story.description}</p>
              <img id="storyimg" src={story.image} alt={story.heading} width="200" />
              
              <button id="edit-btn" onClick={() => handleEditStory(index)}>
                <img id="edit" src={`${process.env.PUBLIC_URL}/Edit.jpg`} alt="Edit" /> Edit
              </button>
            </div>
            </button>
            
          ))
        ) : (
          <p>No medical stories available.</p>
        )}
        </div>
        

        
      
      
    </div>
  );
};

export default Medical;