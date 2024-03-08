import React, { useEffect, useState } from "react";
import "./question-detail.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import AnswerQuestion from "../../components/AnswerQuestion.js/AnswerQuestion";
import Answer from "../../components/Answer/Answer";

const QuestionDetail = () => {
  let params = useParams();
  // console.log(params.id);
  const [getQuestion, setGetQuestion] = useState({});
  const [answers, setAnswers] = useState([]);
  // console.log(answers);
  const getQuestionById = async () => {
    try {
      const question = await axios.get(
        `https://evangadi-mongo-backend.onrender.com/api/questions/singlequestion/${params.id}`
      );
      // console.log(question);
      setGetQuestion(question?.data);
    } catch (error) {
      console.log("something went wrong", error);
    }
  };

  const answerQuestion = async () => {
    try {
      const answerResponse = await axios.get(
        `https://evangadi-mongo-backend.onrender.com/api/answers/allanswers/${params.id}`
      );

      // console.log(answerResponse);

      setAnswers(answerResponse.data);
    } catch (error) {
      console.log("something went wrong", error);
    }
  };
  // console.log(answers);

  useEffect(() => {
    getQuestionById();
    answerQuestion();
  }, [getQuestion?.id]);
  return (
    <div className="container my-5">
      <div>
        <h3>Question</h3>
        <h5>{getQuestion?.title}</h5>
        <div>
          {/* {getQuestion?.description} */}
          <div dangerouslySetInnerHTML={{ __html: getQuestion?.description }} />
        </div>
      </div>

      <hr />

      <div>
        {answers?.length > 0 ? (
          <h3> {answers?.length} answers from the community </h3>
        ) : (
          ""
        )}
      </div>
      {answers.map((item) => (
        <div key={item._id}>
          <Answer answer={item?.answers} username={item?.userid} />
        </div>
      ))}

      <AnswerQuestion questionid={getQuestion?.id} />
    </div>
  );
};

export default QuestionDetail;
