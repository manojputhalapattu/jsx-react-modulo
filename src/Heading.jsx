
import React from "react";
function Heading() {
  
  const today = new Date();
  const t = today.getHours();
  let jsp;
  //const jsp =0;
  let styles = {
    color: "red"
  };
  
  if (t < 12) {
    jsp = "morning";
    styles.color = "pink";
    // color = "pink";
  } else if (t < 18) {
    jsp = "afternoon";
    styles.color="red";
    // color = "blue";
  } else if (t > 19) {
    jsp = "Night ";
    styles.color = "blue";
    //color = "yellow";
  }
return <h1 className="heading" styles="styles">Good {jsp}</h1>
  
}



  
export default Heading;
