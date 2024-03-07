import React from "react";
import UserImg from "../../Assets/User.png";

const Answer = ({ answer, username }) => {
  return (
    <div>
      <hr />
      <div className="d-md-flex align-items-center justify-space-between">
        <div className="d-flex flex-md-column">
          <img className="avatar" src={UserImg} alt="user image" />
          <h6 className="align-self-center ms-2 ms-md-0">{username}</h6>
        </div>
        <div className="ms-md-5">
          <div className="pt-2 pt-md-0">
            <div dangerouslySetInnerHTML={{ __html: answer }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answer;
