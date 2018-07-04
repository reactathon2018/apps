import React from "react";
const Contact = props => {
  const { name, email, phno } = props.data;
  return (
    <div style={{ margin: 20 }}>
      <div>{name}</div>
      <div>
        <span>
          <i className="fa fa-envelope-o fa-fw" />
        </span>
        {email}
      </div>
      <div>
        <span>
          <i class="fa fa-phone" aria-hidden="true" />
        </span>
        {phno}
      </div>
    </div>
  );
};

export default Contact;
