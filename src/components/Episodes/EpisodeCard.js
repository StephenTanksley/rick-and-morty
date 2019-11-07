import React from 'react';
import {Card} from '../Styles/Styles'
import {CardText, CardBody, CardTitle} from 'reactstrap';

export const EpisodeCard = (props) => { //We're formatting props to become a variable we can manipulate.
    const ep = props.item
    console.log(ep)
    return (
      <Card>
        <CardBody>
            <CardTitle><h3>Name: {ep.name}</h3></CardTitle><br />
            <CardText><h4>Episode: {ep.episode}</h4></CardText>
            <CardText><h4>Air Date: {ep.air_date}</h4></CardText>
        </CardBody>
      </Card>
    )
}




//  App ---(props)--------> 
//  EpisodeList (logic lives here) --------> 
//  EpisodeCard (is just a container that formats what Episode List gets from props)