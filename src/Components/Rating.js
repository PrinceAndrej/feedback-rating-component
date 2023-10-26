import React, { useState } from "react";
import "./Rating.css";
import { default as star } from "../icon-star.svg";
import phone from "../illustration-thank-you.svg";

export function Rating() {
  const [submitClicked, setSubmitClicked] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [clickedButton, setClickedButton] = useState(null);

  const handleButtonClick = (value) => {
    console.log(`You clicked rating ${value}`);
    setSelectedValue(value);
    setClickedButton(value); // Set the clicked button
  };

  const handleSubmitClick = () => {
    console.log("You clicked submit");
    setSubmitClicked(true);
  };

  if (submitClicked) {
    return (
      <div className="panel1">
        <img className="phone" src={phone}></img>
        <div className="ratingContainer">
          <p className="ratingFeedback">
            You selected {selectedValue} out of 5
          </p>
        </div>
        <h1 className="thankYou">Thank you!</h1>
        <p className="thankYoup">
          We appriciate you taking the time to give a rating. If you ever need
          more support, don`t hesitate to get in touch!
        </p>
      </div>
    );
  } else {
    return (
      <div className="panel">
        <img className="stars" src={star} alt="Star Icon" />
        <h1 className="title">How did we do?</h1>
        <p className="description">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="button-container">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              className={`ratingBtn ${
                clickedButton === value ? "clicked" : ""
              }`}
              onClick={() => handleButtonClick(value)}
            >
              {value}
            </button>
          ))}
        </div>
        <button className="submitBtn" onClick={handleSubmitClick}>
          SUBMIT
        </button>
      </div>
    );
  }
}
