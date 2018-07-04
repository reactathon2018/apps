import React from "react";

const TabPane = ({ children, tag, active, style }) => {
  const id = `pills-${tag}`;
  const ariaLabel = `pills-${tag}-tab`;
  const classes = `tab-pane fade ${active ? "active show" : ""}`;
  return (
    <div
      className={classes}
      id={id}
      role="tabpanel"
      style={style}
      aria-labelledby={ariaLabel}
    >
      {children}
    </div>
  );
};

export default TabPane;
