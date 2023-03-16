import React, { useState, useEffect } from "react";
import {Card} from "react-bootstrap";
import axios from "axios";
import "./App.css";


const Randomuser = () => {
    const [cardData, setCardData] = useState([]);
    const [visible, setVisible] = useState(1);

const allApiData = async () => {
    const response = await axios.get("https://randomuser.me/api/?results=7")
    setCardData(response.data.results)
}

const loadMore = () => {
  setVisible(visible + 5);
}

useEffect(() => {
    allApiData();
}, []);

const renderCard = (person, index) => {
    return(
        <Card style={{ width: "18rem"}}>
        <div className="avatar">
                    <img
                      src={person.picture.large}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
        <Card.Body>
          <Card.Title>
            {person.name.first} {person.name.last}
          </Card.Title>
          <Card.Text>
          <p>{person.email}</p>
          <span>{person.gender}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    );
};

    return (
      <div className="container">
        <div className="Random">
        <h1>Random users</h1>
        <div className="Wrapper">
        {visible < cardData.length && (
            <div className="Cards">
            {cardData.slice(0, visible).map(renderCard)}
            </div>
        )}
        </div>
        <button className="btn btn-primary"
        onClick={loadMore}>Load 5 More</button>
        </div>
        </div>
    );
};

export default Randomuser;
