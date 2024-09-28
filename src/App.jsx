import React, { useState } from 'react';
import news_feed from './sample_news_stories.json';
import Story from './components/Story';

function App() {
  // Get stories from news feed
  const [stories, setStories] = useState(news_feed.results);

  return (
    <div className="App">
      <h1>News Feed</h1>
      <div className="news-feed">
        {stories.length > 0 ? (
          stories.map((story, index) => (
            <Story key={index} story={story} />
          ))
        ) : (
          <p>No more stories</p>
        )}
      </div>
    </div>
  );
}

export default App;
