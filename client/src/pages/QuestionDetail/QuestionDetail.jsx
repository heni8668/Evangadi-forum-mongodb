import React, { useEffect, useState } from "react";
import "./question-detail.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import AnswerQuestion from "../../components/AnswerQuestion.js/AnswerQuestion";
import Answer from "../../components/Answer/Answer";

const QuestionDetail = () => {
  let params = useParams();
  console.log(params.id);
  const [getQuestion, setGetQuestion] = useState();
  const [answers, setAnswers] = useState([]);

  const getQuestionById = async () => {
    try {
      const question = await axios.get(
        `http://localhost:8000/api/questions/singlequestion/${params.id}`
      );
      console.log(question?.data);
      setGetQuestion(question?.data);
    } catch (error) {
      console.log("something went wrong", error);
    }
  };

  const answerQuestion = async () => {
    try {
      const answerResponse = await axios.get(
        `http://localhost:8000/api/answers/allanswers/${getQuestion?.questionid}`
      );

      console.log(answerResponse);

      setAnswers(answerResponse.data?.answers);
    } catch (error) {
      console.log("something went wrong", error);
    }
  };
  console.log(answers);

  useEffect(() => {
    getQuestionById();
    answerQuestion();
  }, [getQuestion?.questionid]);
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
        <div key={item.answerid}>
          <Answer answer={item?.answer} username={item?.username} />
        </div>
      ))}

      <AnswerQuestion questionid={getQuestion?.questionid} />
    </div>
  );
};

export default QuestionDetail;
