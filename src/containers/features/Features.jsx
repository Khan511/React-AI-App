import React from "react";
import "./features.css";
import { Feature } from "../../components";

const featuresData = [
  {
    title: "improving end distrusts instantly",
    text: "From  of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    title: "Become the tended active",
    text: "From  ch he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    title: "Message or am nothing",
    text: "From   They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    title: "Really boy law county",
    text: "From They fine They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Stem into Future
          Today & Make it Happen
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((data, index) => {
          const { title, text } = data;
          return <Feature key={index} title={title} text={text} />;
        })}
      </div>
    </div>
  );
};

export default Features;
