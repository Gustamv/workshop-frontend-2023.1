import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Episodios() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios.get('https://www.officeapi.dev/api/episodes')
      .then(response => {
        setEpisodes(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <section>
      <h2>Episódios</h2>
      <div className="container">
        {episodes.map(episode => (
          <div key={episode.id} className="card">
            <img src={episode.still_path} alt={episode.name} />
            <h2>{episode.name}</h2>
            <p><label>Season:</label><span>{episode.season}</span></p>
            <p><label>Episode:</label><span>{episode.episode}</span></p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Episodios;
