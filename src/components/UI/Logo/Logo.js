import React from "react";
import classes from "./Logo.scss";

import LogoImg from "../../../assets/images/logo.png";

const Logo = () => (
  <div className={classes.Logo}>
    <img src={LogoImg} alt="Logo" />
  </div>
);

export default Logo;
