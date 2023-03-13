import React from "react";
import "./brand.css";
import { google, slack, atlassian, dropbox, shopify } from "./import";

export default function Brand() {
  return (
    <div className="social">
      <img src={google} alt="google" />
      <img src={slack} alt="slack" />
      <img src={atlassian} alt="atlassian" />
      <img src={dropbox} alt="dropbox" />
      <img src={shopify} alt="shopify" />
    </div>
  );
}
