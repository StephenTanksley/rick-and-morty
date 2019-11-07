import React from 'react';
import {Card} from '../Styles/Styles'
import {CardText, CardBody, CardTitle} from 'reactstrap';

export const LocationCard = (props) => {
    const loc = props.item
    console.log(loc)
    return (
   
        <Card>
          <CardBody>
              <CardTitle><h3>Name: {loc.name}</h3></CardTitle>
              <h4>Type: {loc.type}</h4>
              <h4>Dimension: {loc.dimension}</h4>
          </CardBody>
        </Card>

    )
}