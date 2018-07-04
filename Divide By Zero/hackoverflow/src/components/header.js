import React from "react";
import { Link } from "react-router-dom";
import DropDown from "./dropdown";
const renderSettings = (noSettings, logOut) => {
  const { dropDownStyle } = styles;
  if (!noSettings)
    return (
      <span>
        <DropDown style={dropDownStyle} logOut={logOut} />
      </span>
    );
  return null;
};
const Header = ({ noSettings, logOut }) => {
  const { headerStyle, logoStyle } = styles;
  return (
    <div style={headerStyle}>
      <Link to="/">
        <span style={logoStyle}>
          <img src="../images/logo_small.png" />
        </span>
      </Link>
      {renderSettings(noSettings, logOut)}
    </div>
  );
};
const styles = {
  headerStyle: {
    top: 0,
    zIndex: 1,
    height: 60,
    position: "fixed",
    width: "100%",
    background: "white",
    boxShadow: "0px 3px 7px grey"
  },
  logoStyle: {
    marginLeft: 50
  },
  dropDownStyle: {
    position: "fixed",
    right: 15,
    marginTop: -44,
    fontFamily: "cursive"
  }
};

export default Header;
