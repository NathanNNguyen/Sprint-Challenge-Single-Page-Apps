import React from "react";
import styled from 'styled-components';

export default function WelcomePage() {
  const HeaderStyling = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const ImgStyling = styled.img`
    width: 40%
  `;

  return (
    <section className="welcome-page">
      <HeaderStyling>
        <h1>Welcome to the ultimate fan site!</h1>
        <ImgStyling
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </HeaderStyling>
    </section>
  );
}
