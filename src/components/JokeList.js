import React, { useState, useEffect } from 'react';
import './JokeListCSS.css';

function JokeList() {
  const [jokes, setJokes] = useState([]);

  const getJokes = () => {
    fetch('https://v2.jokeapi.dev/joke/Programming?amount=10')
      .then((response) => response.json())
      .then((data) => setJokes(data.jokes));
  };

  useEffect(() => {
    getJokes();
  }, []);

  return (
    <div>
      <button onClick={getJokes}>Refresh Jokes about Programming</button>
      <ul>
        {jokes.map((joke, index) => (
          <li key={index}>
            {joke.type === 'single'
              ? joke.joke
              : joke.setup + ' ' + joke.delivery}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JokeList;
