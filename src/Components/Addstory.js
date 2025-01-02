// AddStory.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios to fetch images
import '../Styles/Addstory.css';

const Addstory = () => {
  const [slides, setSlides] = useState([{ heading: '', description: '', image: '', category: '', imagePreview: '' }]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const storedStories = JSON.parse(localStorage.getItem('stories'));
    if (!storedStories) {
      const defaultStructure = {
        food: [],
        medical: [],
        fruits: [],
        world: [],
        india: []
      };
      localStorage.setItem('stories', JSON.stringify(defaultStructure));
    }
  }, []);

  // Handle input changes
  const handleInputChange = (e, field) => {
    const updatedSlides = [...slides];
    updatedSlides[currentSlide][field] = e.target.value;

    // If the field is 'image', fetch the image
    if (field === 'image') {
      fetchImage(e.target.value, updatedSlides[currentSlide]);
    }

    setSlides(updatedSlides);
  };

  // Fetch image from URL and set it as a preview
  const fetchImage = async (url, slide) => {
    if (url) {
      try {
        const response = await axios.get(url, { responseType: 'blob' });
        const imageObjectURL = URL.createObjectURL(response.data);
        slide.imagePreview = imageObjectURL; // Set the preview image URL
      } catch (error) {
        console.error('Error fetching image:', error);
        slide.imagePreview = ''; // Reset on error
      }
    } else {
      slide.imagePreview = ''; // Reset if URL is empty
    }
  };

  // Add new slide (up to 5 slides)
  const addNewSlide = () => {
    if (slides.length < 5) {
      setSlides([...slides, { heading: '', description: '', image: '', category: ''}]);
    }
  };

  // Handle navigation between slides
  const handleNext = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1);
  };

  const handlePrevious = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  // Save story to localStorage and navigate back to dashboard
  const handlePostStory = () => {
    const storedStories = JSON.parse(localStorage.getItem('stories')) || {
      food: [],
      medical: [],
      fruits: [],
      world: [],
      india: []
    };

    // Iterate over the slides to categorize the stories
    slides.forEach((slide) => {
      if (slide.category === 'Food') {
        storedStories.food.push(slide);
      } else if (slide.category === 'Medical') {
        storedStories.medical.push(slide);
      } else if (slide.category === 'Fruits') {
        storedStories.fruits.push(slide);
      } else if (slide.category === 'World') {
        storedStories.world.push(slide);
      } else if (slide.category === 'India') {
        storedStories.india.push(slide);
      }
    });

    // Save the updated stories to localStorage
    localStorage.setItem('stories', JSON.stringify(storedStories));

    // Navigate back to the dashboard after posting
    navigate('/dashboard');
  };

  return (
    <div id="storycontainer">
      <div id="storycontent">
        <img id="closebtn" src={`${process.env.PUBLIC_URL}/Close.jpg`} alt="" onClick={() => navigate('/Dashboard')} />

        {/* Slide navigation */}
        <div id="slide-navigation">
          {slides.map((_, index) => (
            <div key={index} id="slide-navigation-item">
              <button
                id={index === currentSlide ? 'active-slide-btn' : ''}
                onClick={() => setCurrentSlide(index)} 
              >
                Slide {index + 1}
              </button>
            </div>
          ))}
          {slides.length < 5 && (
            <button className="add-slide-btn" onClick={addNewSlide}>
              Add +
            </button>
          )}
        </div>

        {/* Form for slide content */}
        <div id="slide-form">
          <label className="headng">Heading :</label>
          <input 
            id="heading"
            type="text"
            placeholder="Your heading"
            value={slides[currentSlide].heading}
            onChange={(e) => handleInputChange(e, 'heading')}
          />

          <label className="headng">Description :</label>
          <textarea 
            id="description"
            placeholder="Story Description"
            value={slides[currentSlide].description}
            onChange={(e) => handleInputChange(e, 'description')}
          ></textarea>

          <label className="headng">Image URL :</label>
          <input 
            id="imgurl"
            type="text"
            placeholder="Add Image URL"
            value={slides[currentSlide].image}
            onChange={(e) => handleInputChange(e, 'image')}
          />
         

          <label className="headng">Category :</label>
          <select 
            id="category"
            value={slides[currentSlide].category}
            onChange={(e) => handleInputChange(e, 'category')}
          >
            <option value="">Select category</option>
            <option value="Food">Food</option>
            <option value="Medical">Medical</option>
            <option value="Fruits">Fruits</option>
            <option value="World">World</option>
            <option value="India">India</option>
          </select>
        </div>

        {/* Bottom Buttons */}
        <div id="button-section">
          <button id="prebtn" onClick={handlePrevious} disabled={currentSlide === 0}>
            Previous
          </button>
          <button id="nxt" onClick={handleNext} disabled={currentSlide === slides.length - 1}>
            Next
          </button>
          <button id="post-btn" onClick={handlePostStory}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addstory;