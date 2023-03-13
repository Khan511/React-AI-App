import React from "react";
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";
export default function Possibility() {
  return (
    <div className="gpt3__possibility section__padding">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__posibility-content">
        <h4>Request Early Acces to Geet Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cum
          deleniti ex animi? Natus atque, reiciendis a voluptas, ducimus
          adipisci possimus, delectus quos inventore velit at sed eum aperiam!
          Cum.
        </p>
        <h4>Request Early Acces to Geet Started</h4>
      </div>
    </div>
  );
}
