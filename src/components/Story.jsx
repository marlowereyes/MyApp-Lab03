import React from 'react';
import '../App.css';

const Story = ({ story }) => {
  const { title, image_url, link, creator, description } = story;
  const placeholderImage = 'https://placehold.co/600x400';

  const handleDelete = (e) => {
    const storyElement = e.target.closest('.story'); 
    if (storyElement) {
      storyElement.remove();
    }
  };
  

  return (
    <div className="story">
      <img src={image_url || placeholderImage} alt={title} className="story-image"/>
      <div>
        <h2><a href={link} target="_blank" rel="noopener noreferrer">{title}</a></h2>
        <h3>By: {creator ? creator.join(', ') : 'Unknown'}</h3>
        <p>{description}</p>
      </div>
      <div className='x'>
      <span onClick={handleDelete}> x </span>
      </div>
    </div>
  );
};

export default Story;
