import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Home.css'; // Import custom styles

const Home = () => {
  const [stories, setStories] = useState({
    food: [],
    medical: [],
    fruits: [],
    world: [],
    india: []
  });

  const navigate = useNavigate();

  // Function to fetch stories from localStorage
  const fetchStories = () => {
    const storedStories = localStorage.getItem('stories');
    if (storedStories) {
      const parsedStories = JSON.parse(storedStories);
      setStories({
        food: parsedStories.food || [],
        medical: parsedStories.medical || [],
        fruits: parsedStories.fruits || [],
        world: parsedStories.world || [],
        india: parsedStories.india || []
      });
    }
  };

  useEffect(() => {
    // Initial fetch of stories from localStorage
    fetchStories();

    // Listen for changes in localStorage and update stories
    window.addEventListener('storage', fetchStories);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('storage', fetchStories);
    };
  }, []);

  return (
    <div id="homepage">
      {/* Header with Register and Login buttons */}
      <div id="header">
        <div className="nav-buttons">
          <button id="register-btn" onClick={() => navigate('/register')}>
            Register Now
          </button>
          <button id="login-btn" onClick={() => navigate('/login')}>
            Sign In
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="image-section">
        <Link to="/all">
          <div className="image-box">
            <img src={`${process.env.PUBLIC_URL}/All.png`} alt="All" />
            <div id="text1">All</div>
          </div>
        </Link>

        <Link to="/medical">
          <div className="image-box">
            <img src={`${process.env.PUBLIC_URL}/Medical.png`} alt="Medical" />
            <div id="text2">Medical</div>
          </div>
        </Link>

        <Link to="/fruits">
          <div className="image-box">
            <img src={`${process.env.PUBLIC_URL}/Fruits.png`} alt="Fruits" />
            <div id="text3">Fruits</div>
          </div>
        </Link>

        <Link to="/world">
          <div className="image-box">
            <img src={`${process.env.PUBLIC_URL}/World.png`} alt="World" />
            <div id="text4">World</div>
          </div>
        </Link>

        <Link to="/india">
          <div className="image-box">
            <img src={`${process.env.PUBLIC_URL}/India.png`} alt="India" />
            <div id="text5">India</div>
          </div>
        </Link>
      </div>

      {/* Stories Section */}
      <div id="stories-section">
        
        {/* Display Top Stories About Food */}
        <h2>Top Stories About Food</h2>
        {stories.food.length === 0 ? (
          <p>No stories available</p>
        ) : (
          
       
          <ul  class="stories-grid">
            {stories.food.map((story, index) => (
              <li key={index}  class="story-card">
                <h3>{story.heading}</h3>
                <p>{story.description}</p>
                <img class="storyimg" src={story.image} alt={story.heading} />
              </li>
            ))}
          </ul>
        )}

        {/* Display Top Stories About Medical */}
        <h2>Top Stories About Medical</h2>
        {stories.medical.length === 0 ? (
          <p>No stories available</p>
        ) : (
          <ul class="stories-grid">
            {stories.medical.map((story, index) => (
              <li key={index}  class="story-card">
                <h3>{story.heading}</h3>
                <p>{story.description}</p>
                <img class="storyimg" src={story.image} alt={story.heading} />
              </li>
            ))}
          </ul>
        )}

        {/* Display Top Stories About Fruits */}
        <h2>Top Stories About Fruits</h2>
        {stories.fruits.length === 0 ? (
          <p>No stories available</p>
        ) : (
          <ul class="stories-grid">
            {stories.fruits.map((story, index) => (
              <li key={index}  class="story-card">
                <h3>{story.heading}</h3>
                <p>{story.description}</p>
                <img class="storyimg" src={story.image} alt={story.heading} />
              </li>
            ))}
          </ul>
        )}

        {/* Display Top Stories About World */}
        <h2>Top Stories About World</h2>
        {stories.world.length === 0 ? (
          <p>No stories available</p>
        ) : (
          <ul class="stories-grid">
            {stories.world.map((story, index) => (
              <li key={index}  class="story-card">
                <h3>{story.heading}</h3>
                <p>{story.description}</p>
                <img class="storyimg" src={story.image} alt={story.heading} />
              </li>
            ))}
          </ul>
        )}

        {/* Display Top Stories About India */}
        <h2>Top Stories About India</h2>
        {stories.india.length === 0 ? (
          <p>No stories available</p>
        ) : (
          <ul class="stories-grid">
            {stories.india.map((story, index) => (
              <li key={index} class="story-card">
                <h3>{story.heading}</h3>
                <p>{story.description}</p>
                <img class="storyimg" src={story.image} alt={story.heading} />
              </li>
            ))}
          </ul>
        )}
      </div>
      
    </div>
  );
};

export default Home;