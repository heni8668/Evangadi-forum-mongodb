import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./answerquestion.css";
import { UserContext } from "../../context/UserContext";
import axios from "axios";

const AnswerQuestion = ({ questionid }) => {
  const [userData, setUserData] = useContext(UserContext);
  const [addAnswer, setAddAnswer] = useState("");
  // const { questionid } = useParams();
  // console.log(questionid);

  const handleChange = (e) => {
    setAddAnswer(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8000/api/answers/addanswer`, {
        userid: userData.user?.id,
        questionid: questionid,
        answer: addAnswer,
      });
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
