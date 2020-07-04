//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import ReactDom from "react-dom";

const today = new Date();
const t = today.getHours();
//const jsp =0;
let styles = {
  color: "red"
};
let jsp;
if (t < 12) {
  jsp = "morning";
  styles.color = "pink";
  // color = "pink";
} else if (t < 18) {
  jsp = "afternoon";
  // color = "blue";
} else if (t > 19) {
  jsp = "Night ";
  styles.color = "blue";
  //color = "yellow";
}

ReactDom.render(
  <h1 style={styles}> Good {jsp}</h1>,
  document.getElementById("root")
);
