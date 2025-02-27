import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
export default function OnecardPopularMovie(props) {
    return (
      
        <Col md="4" sm="4" className="mt-3">
            <Card className ="card-movie">
                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/original" + props.item.poster_path} height ="300px" style={{    margin :"auto" , objectFit :"cover"}}  />
                <Card.Body>
                    <Card.Title>{props.item.original_title}</Card.Title>
                    <Card.Text>
                        year : {props.item.release_date}
                        <br/>
                         {props.item.vote_average} / 10
                        <br/>
                        
                     </Card.Text>
                   
                </Card.Body>
            </Card>
        </Col>
       
    )
}
