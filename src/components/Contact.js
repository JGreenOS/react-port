import React from 'react';
import { Card, Button} from "react-bootstrap";
import "./box.css";


const ConDetails = () => {
    const cardInfo2 =
    [
        {
        title: "Contact Details",
        text: "Select method of contact",
        button1text: <a href="mailto:jsciteach@aol.com" target="_blank" rel="noreferrer">Email Me </a>,
        button2text: <a href="./Assets/2021Resume.pdf" target="_blank"vrel="noreferrer">Click to view current resume</a>,
        button3text: <a href="https://www.linkedin.com/in/julia-green-033/" target="_blank" rel="noreferrer">Linked In Profile</a> 
        }
    ];


const renderCards = (card, index) => {
    return (
        <div>
           
        <Card style={{ width: '18rem' }}key ={index}>
        <Card.Img variant="top" src={card.image} />
        <Card.Body>
         <Card.Title>{card.title}</Card.Title>
        <Card.Text>{card.text}</Card.Text>
        <Button className="btn btn-light">{card.button1text}</Button>
        <Button className="btn btn-light">{card.button2text}</Button>
        <Button className="btn btn-light">{card.button3text}</Button>
        </Card.Body>
        </Card>
    </div>
    )
    }

return (
<div className="grid">{cardInfo2.map(renderCards)}</div>
)
};

export default ConDetails;
