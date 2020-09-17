import React from 'react';
import { Card, Button, CardTitle, CardText, Col } from 'reactstrap';

const LocationCard = (props) => {



    return(
        <>
        
        {props.locations.map(location => {

            return(
            <Col sm="4">
                <Card body>
                <CardTitle>{location.name}</CardTitle>
                <CardText>{location.description}</CardText>
                <Button onClick={() => {props.editUpdateLocation(location); props.updateOn()}}>Update</Button>
                <Button onClick={() => {props.deleteLocation(location)}}>Delete</Button>
                </Card>
            </Col>
            )
        })}
        </>
    )
}

export default LocationCard;