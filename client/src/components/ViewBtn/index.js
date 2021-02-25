import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function ViewBtn(props) {
  return (
    <a className="btn btn-info" href={props.href} target="_blank" role="button" style={{ float: "right", margin: 5, borderRadius: 4, color: "white" }}>
      View
    </a>
  );
}

export default ViewBtn;
