import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./answerquestion.css";
import { UserContext } from "../../context/UserContext";
import axios from "axios";

const AnswerQuestion = ({ id }) => {
  const [userData, setUserData] = useContext(UserContext);
  const [addAnswer, setAddAnswer] = useState("");
  const params = useParams();

  // const handleChange = (e) => {
  //   setAddAnswer(e.target.value);
  // };
  // console.log(questionid);

  const handleChange = (e) => {
    setAddAnswer(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `https://evangadi-mongo-backend.onrender.com/api/answers/addanswer`,
        {
          userid: userData.user?.id,
          questionid: params.id,
          answer: addAnswer,
        }
      );
      window.location.reload(false);
    } catch (error) {
      console.log("something went wrong", error);
    }
  };

  return (
    <div className="container my-5">
      <form
        onSubmit={handleSubmit}
        className="answer-wrapper d-flex flex-column p-5 justify-content-between"
      >
        <h3>Answer the above question?</h3>
        <Link
          to="/"
          className="text-decoration-none text-danger fs-5 cursor-pointer"
        >
          Go to question page
        </Link>
        <textarea
          className="answer-field"
          placeholder="enter your answer..."
          name="answer"
          value={addAnswer}
          onChange={handleChange}
        ></textarea>

        <button className="answer-btn" type="submit">
          Post
        </button>
      </form>
    </div>
  );
};

export default AnswerQuestion;
