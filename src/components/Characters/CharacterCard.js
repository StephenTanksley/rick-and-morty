import React from "react";
import {Card} from '../Styles/Styles' 
import {CardImg, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';


const CharacterCard = (props) => {
  const char = props.item
  return (
    <Card>
      <CardBody>
        <CardImg src={char.image} alt='character portrait' />
        <CardTitle><h3>Name: {char.name}</h3></CardTitle><br />
          <CardSubtitle><h4>Status: {char.status}</h4></CardSubtitle>
        <h5>Gender: {char.gender}</h5>
        <h5>Species: {char.species}</h5>
      </CardBody>
    </Card>
  )
}

export default CharacterCard;