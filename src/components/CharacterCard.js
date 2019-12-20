import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import styled from 'styled-components';
export default function CharacterCard({ name, img, gender, species }) {

  const CardStyling = styled.div`
    width: 30%;
    text-align: center;
  `;
  return (
    <CardStyling>
      <Card>
        <CardImg top width="40%" src={img} alt="Card image cap" />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>{gender}</CardSubtitle>
          <CardSubtitle>{species}</CardSubtitle>
        </CardBody>
      </Card>
    </CardStyling>
  )
}
