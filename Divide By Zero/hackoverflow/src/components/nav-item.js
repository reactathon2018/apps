import React from "react";

const NavItem = ({ tag, children, active }) => {
  const classes = `nav-link ${active ? "active" : ""}`;
  const id = `pills-${tag}-tab`;
  const hrefLink = `#pills-${tag}`;
  const ariaControls = `pills-${tag}`;
  const isSelected = active ? "true" : "false";
  const { textStyle } = styles;
  return (
    <li className="nav-item">
      <a
        className={classes}
        id={id}
        data-toggle="pill"
        href={hrefLink}
        role="tab"
        style={textStyle}
        aria-controls={ariaControls}
        aria-selected={isSelected}
      >
        {children}
      </a>
    </li>
  );
};
const styles = {
  textStyle: {
    fontFamily: "cursive"
  }
};
export default NavItem;
