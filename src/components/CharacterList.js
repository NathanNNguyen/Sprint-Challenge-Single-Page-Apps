import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';
import styled from 'styled-components';
import axios from 'axios';

export default function CharacterList() {

  const ListStyling = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  `;

  const [characters, setCharacters] = useState([]);
  const [searchTerms, setSearchTerms] = useState('')

  const handleChange = event => {
    setSearchTerms(event.target.value)
  };

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        const data = res.data.results.filter((character) => character.name.toLowerCase().includes(searchTerms.toLowerCase()));
        setCharacters(data);
        // console.log(res.data.results);
      })
      .catch(err => console.log(err));
  }, [searchTerms]);
  // console.log(characters);

  return (
    <div>
      <SearchForm characters={characters} searchTerms={searchTerms} setSearchTerms={setSearchTerms} handleChange={handleChange} />
      <ListStyling className="character-list">
        {characters.map((character, index) => {
          return <CharacterCard key={index} name={character.name} img={character.image} gender={character.gender} species={character.species} />;
        })}
      </ListStyling>
    </div>
  );
}
