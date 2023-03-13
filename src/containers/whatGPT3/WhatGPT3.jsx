import React from "react";
import { Feature } from "../../components";
import "./whatgpt3.css";
export default function WhatGPT3() {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
          laudantium laboriosam voluptates corporis fugit quaerat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
          laudantium laboriosam volupta."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
            dolor officia impedit ut a, atque non ex perferendis Lorem ."
        />

        <Feature
          title="Knowledgebase"
          text="  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
            dolor officia impedit ut a, atque non ex perferendis Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        />

        <Feature
          title="Education"
          text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
            dolor officia impedit ut a, atque non  ."
        />
      </div>
    </div>
  );
}
