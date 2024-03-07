import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import Question from "../../components/Question/Question";
import "./home.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useContext(UserContext);
  const [allQuestions, setAllQuestions] = useState([]);
  // const [search, setSearch] = useState("");
  // console.log(userData);

  useEffect(() => {
    AllQuestions();
  }, []);

  const AllQuestions = async () => {
    try {
      const questionResponse = await axios.get(
        "http://localhost:8000/api/questions/allquestions"
      );

      console.log(questionResponse.data);
      setAllQuestions(questionResponse.data);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/ask-question");
  };

  // console.log(allQuestions);

  return (
    <div className="home-page-container container my-5">
      <div className="d-md-flex justify-content-between">
        <button className="question-btn" onClick={handleClick}>
          Ask Question
        </button>
        <h5 className="welcome">
          Wel-come:<span className="username"> {userData.user?.username}</span>
        </h5>
      </div>
      <h3 className="fs-5">Total Questions: {allQuestions?.length} </h3>
      <div>
        {allQuestions.map((item) => (
          <div key={item.id}>
            <hr />
            <Link
              to={`questions/${item.id}`}
              className="text-decoration-none text-reset"
            >
              <Question
                question={item.title}
                username={item.username}
                tag={item.tag}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
