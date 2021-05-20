import React from 'react';
import { Card, Button} from "react-bootstrap";
import "./box.css";


const ProjectDetails = () => {
    const cardInfo = 
    [
        {
        image: "../images/2021-04-25_18-38-36.png",
        title: "Burger Logger",
        text: "A burger logger with MySQL, Node, Express, Handlebars and ORM. Example of using MVC design pattern and deployed to Heroku",
        button1text: <a href="https://fierce-cliffs-24551.herokuapp.com/" target="_blank" rel="noreferrer">Deployed Project</a>,
        button2text: <a href="https://github.com/JGreenOS/BurgerApp" target="_blank" rel="noreferrer">GitHub Repo </a>,
        },
        {
        image: "../images/2021-04-25_21-20-41.png",
        title: "Fitness Tracker",
        text: "This project was to create a back-end connection for a web-based workout tracker using provide front-end code with a Mongo database, a Mongoose schema and Express to handle the routing.",
        button1text: <a href="https://sleepy-oasis-49064.herokuapp.com/" target="_blank" rel="noreferrer">Deployed Project</a>,
        button2text: <a href="https://github.com/JGreenOS/fitnessTracker/" target="_blank" rel="noreferrer">Github Repo</a>
        },
        {
        image:"../Images/2021-04-25_17-33-38.png",
        title:"Budget Tracker",
        text: "Budget Tracker using online (Mongo DB) offline storage (IndexedDB)",
        button1text: <a href="https://jgreenos.github.io/HW5/" target="_blank" rel="noreferrer">Deployed Project</a>,
        button2text: <a href="https://github.com/JGreenOS/HW5" target="_blank" rel="noreferrer">Github Repo</a>
        },
        {
        image: "../Images/drinksplease.png",
        title: "API Demonstration Project",
        text: "Drinks, Please! A group project with Agile development",
        button1text:  <a href="https://vshulman25.github.io/drinksplease/" target="_blank" rel="noreferrer">Deployed Project</a>,
        button2text: <a href="https://github.com/vshulman25/drinksplease/" target="_blank" rel="noreferrer">GitHub Repo </a>   
        },
        {
        image: "../Images/102680286-da5dc900-4184-11eb-9b1a-4060bf1a0b54.png",
        title: "Strong Password Generator Project",
        text: "Password Generator with ASCII character reference instead of an array. Note: not deployed as this is a local browser project with prompts",
        button1text: <a href="https://github.com/JGreenOS/HW3" target="_blank" rel="noreferrer">Github Repo</a>,
        },
     {
         image: "../Images/workdaySchedulerSS.png",
         title: "Work Day Scheduler Project",
         text: "What's My Schedule Anyway?? Project using browser local storage",
         button1text:  <a href="https://jgreenos.github.io/HW5/" target="_blank" rel="noreferrer">Deployed Project</a>,
        button2text: <a href="https://github.com/JGreenOS/HW5" target="_blank" rel="noreferrer">Github Repo</a>       
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
    <div className="grid">{cardInfo.map(renderCards)}</div>
)
   
};

export default ProjectDetails;