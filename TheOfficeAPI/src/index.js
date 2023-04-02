import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Galeria() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://www.officeapi.dev/api/characters')
      .then(response => {
        setCharacters(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section>
      <h2>Galeria</h2>
      <div className="search">
        <input type="text" placeholder="Pesquisar personagem" value={searchTerm} onChange={handleSearch} />
      </div>
      <div className="container">
        {filteredCharacters.map(character => (
          <div key={character.id} className="card">
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <p><label>Position:</label><span>{character.position}</span></p>
            <p><label>Office:</label><span>{character.office}</span></p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Galeria;
