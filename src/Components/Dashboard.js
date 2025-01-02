import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Dashboard.css';
// import '../styles/Home.css';

const Dashboard = () => {
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

  const viewstory = (story,index) => {
    localStorage.setItem('selectedStory', JSON.stringify(story));

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

      {/* Image Section for Categories */}
      <div className="image-section">
        <Link to="/all">
          <div className="image-box">
            <img src={`${process.env.PUBLIC_URL}/All.png`} alt="All" />
            <div id="text1">All</div>
          </div>
        </Link>

        <Link to="/Medical">
          <div className="image-box">
            <img src={`${process.env.PUBLIC_URL}/Medical.png`} alt="Medical" />
            <div id="text2">Medical</div>
          </div>
        </Link>

        <Link to="/Fruits">
          <div className="image-box">
            <img src={`${process.env.PUBLIC_URL}/Fruits.png`} alt="Fruits" />
            <div id="text3">Fruits</div>
          </div>
        </Link>

        <Link to="/World">
          <div className="image-box">
            <img src={`${process.env.PUBLIC_URL}/World.png`} alt="World" />
            <div id="text4">World</div>
          </div>
        </Link>

        <Link to="/India">
          <div className="image-box">
            <img src={`${process.env.PUBLIC_URL}/India.png`} alt="India" />
            <div id="text5">India</div>
          </div>
        </Link>
      </div>

      {/* Story Sections */}
      <div id="stories-section">
        {/* Food Stories */}
        <h2>Your Stories</h2>

        <div id="stories-grid">
          {stories.food && stories.food.length === 0 ? (
            stories.food.map((story, index) => (
              <button id="view-btn" onClick={() => viewstory(index)}>
              <div key={index} id="story-card"> 
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
            <p>No  stories available.</p>
          )}
          
        </div>

        {/* Medical Stories */}
        <h2>Medical Stories</h2>
        <div id="stories-grid">

        {stories.medical && stories.medical.length === 0 ? (
          stories.medical.map((story, index) => (
            <button id="view-btn" onClick={() => viewstory(index)}>

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
        {/* Add sections for other categories like Fruits, World, and India */}
        <h2> Fruits Stories</h2>
        <div id="stories-grid">

        {stories.fruits && stories.medical.length === 0 ? (
          stories.fruits.map((story, index) => (
            <button id="view-btn" onClick={() => viewstory(index)}>

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
          <p>No Fruits stories available.</p>
        )}
        </div>
        <h2>World Stories</h2>
        <div id="stories-grid">

        {stories.world && stories.medical.length === 0 ? (
          stories.world.map((story, index) => (
            <button id="view-btn" onClick={() => viewstory(index)}>

            <div key={index}  id="story-card">
              <h3>{story.heading}</h3>
              <p>{story.description}</p>
              <img id="storyimg" src={story.image} alt={story.heading}  />
              
              <button id="edit-btn" onClick={() => handleEditStory(index)}>
                <img id="edit" src={`${process.env.PUBLIC_URL}/Edit.jpg`} alt="Edit" /> Edit
              </button>
            </div>
            </button>
          ))
        ) : (
          
          <p>No World stories available.</p>
        )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;