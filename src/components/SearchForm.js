import React, { useState } from "react";
import styled from 'styled-components';

export default function SearchForm(props) {

  const SearchForm = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
  `;

  const { searchTerms, setSearchTerms, handleChange } = props

  return (
    <SearchForm className="search-form">
      <form>
        <input id="name" type="text" name="textfield" placeholder="Search" onChange={handleChange} value={searchTerms} />
      </form>
    </SearchForm>
  );
}
