import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import styled from 'styled-components';
import axios from 'axios';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  const ListStyling = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  `;

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        setCharacters(res.data.results);
        console.log(res.data.results);
      })
      .catch(err => console.log(err));
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);
  // console.log(characters);

  return (
    <ListStyling className="character-list">
      {characters.map((character, index) => {
        return <CharacterCard key={index} name={character.name} img={character.image} gender={character.gender} species={character.species} />;
      })}
    </ListStyling>
  );
}
