import React, { useContext, useState } from "react";
import "./askquestion.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import axios from "axios";

const AskQuestion = () => {
  const [userData, setUserData] = useContext(UserContext);
  const navigate = useNavigate();
  const [askInput, setAskInput] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleInput = (e) => {
    setAskInput({ ...askInput, [e.target.name]: e.target.value });
  };

  // console.log(userData.user?.id);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/questions/askquestion", {
        userid: userData.user?.id,
        title: askInput.title,
        description: askInput.description,
        tag: askInput.tag,
      });
      navigate("/");
    } catch (error) {
      console.log("something went wrong", error);
    }
  };
  return (
    <div className="container my-5">
      <div className="d-flex flex-column align-items-start my-5">
        <h4 className="">Steps to write a good question</h4>
        <ul className="question-step">
          <li>Summerize your problem in a one-line title.</li>
          <li>Describe your problem in more detail.</li>
          <li>Describe what you tried and what you expected to happen.</li>
          <li>Review your question and post it to the site.</li>
        </ul>
      </div>
      <form
        className="question-container d-flex flex-column p-5 justify-content-between"
        onSubmit={handleSubmit}
      >
        <h3>Ask a public question</h3>
        <Link
          to="/"
          className="text-decoration-none text-danger fs-5 cursor-pointer d-flex justify-content-end py-5 text-gray-600"
        >
          Go to Question page
        </Link>

        <input
          type="text"
          name="title"
          onChange={handleInput}
          className="question-title"
          placeholder="Enter title.."
        />
        <textarea
          name="description"
          onChange={handleInput}
          className="question-detail"
          placeholder="Question Details"
        ></textarea>
        <input
          type="text"
          name="tag"
          onChange={handleInput}
          className="question-title"
          placeholder="Enter tag.."
        />
        <button className="ask-question-btn">Post</button>
      </form>
    </div>
  );
};

export default AskQuestion;
