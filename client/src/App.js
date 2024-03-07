import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AskQuestion from "./pages/AskQuestion/AskQuestion";
import AnswerQuestion from "./pages/QuestionDetail/QuestionDetail";
import axios from "axios";
import { useEffect, useContext } from "react";
import { UserContext } from "./context/UserContext";

function App() {
  const [userData, setUserData] = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    checkUserLoggedIn();
  }, []);
  const checkUserLoggedIn = async () => {
    try {
      let token = localStorage.getItem("token");
      if (token === null) {
        localStorage.setItem("token", "");
        token = "";
      } else {
        const { data } = await axios.get(
          "http://localhost:8000/api/users/check",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        console.log(data);
        setUserData({
          token,

          user: {
            _id: data._id,
            username: data.username,
          },
        });
      }
    } catch (error) {
      console.log(error.data?.msg);
      navigate("/login");
    }
  };

  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("token", "");
  };
  return (
    <div>
      <Header logout={logout} />
      <br />
      <br />
      <br />
      <br />
      {/* <br />
      <br />
      <br /> */}
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home logout={logout} />} />
        <Route path="/ask-question" element={<AskQuestion />} />
        <Route path="/questions/:id" element={<AnswerQuestion />} />
        {/* <Route path="/questions/:questionid" element={<AnswerQuestion />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
