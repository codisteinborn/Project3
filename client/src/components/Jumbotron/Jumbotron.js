import React from "react";
import { Jumbotron } from 'react-bootstrap';
import Button from 'muicss/lib/react/button';
import "./jumbotron.css";

const Jumbo = props =>
<Jumbotron className="jumboBkrnd" >
  <Button onClick={props.jumboHide} variant="raised" className="shopBtn">Shop Now</Button>
  </Jumbotron>;

export default Jumbo;
