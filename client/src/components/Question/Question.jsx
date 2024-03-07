import React from "react";
import "./question.css";
import profile from "../../Assets/User.png";

const Question = ({ question, username, tag }) => {
  return (
    <div className="d-md-flex align-items-center justify-space-between">
      <div className="profile-container d-flex flex-md-column">
        <img src={profile} alt="avatar" className="avatar" />
        <h6 className="username-text align-self-center ms-2 ms-md-0 text-center fs-4">
          {username}
        </h6>
      </div>
      <div className="ms-md-5 flex-grow-1 question-link">
        <h6 className="pt-2 pt-md-0 q-fs">{question}</h6>
        <h6>{tag}</h6>
      </div>
      <div className="d-none d-md-block ms-md-5">
        <i className="fa fa-angle-right"></i>
      </div>
    </div>
  );
};

export default Question;
