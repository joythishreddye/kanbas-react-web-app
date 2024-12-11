import "../../styles.css";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import QuestionContainer from "./QuestionContainer";
import {addQuestion, setQuestions} from "./reducerQuestions";
import * as quizClient from "./client"


export default function QuizQuestionEditor() {
  const { qid } = useParams();
  const { cid } = useParams();
  const dispatch = useDispatch();
  const { questions } = useSelector((state: any) => state.questionsReducer);

  const fetchQuestions = async () => {
    const questions = await quizClient.findQuestionForQuiz(qid as string);
    dispatch(setQuestions(questions));
  };
  useEffect(() => {
    fetchQuestions();
  }, []);

  const createQuestionForQuiz = async () => {
    if (!qid) return;
    const newQuestion = {
      title: "New Question",
      question: "",
      points: "0",
      type: "Multiple Choice",
      choices: [],
      answers: [],
      quiz: qid,
      sequence: questions.length
    };
    const question = await quizClient.createQuestionForQuiz(qid, newQuestion);
    dispatch(addQuestion(question)); 
  };

  return (
    <div id="wd-quiz-editor">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link text-danger " aria-current="page" href={`#/Kanbas/Courses/${cid}/Quizzes/${qid}/Editor`}>
            Details
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link active "
            href={`#/Kanbas/Courses/${cid}/Quizzes/${qid}/QuestionsEditor`}
          >
            Questions
          </a>
        </li>
      </ul>
      <br />

      <div id="wd-quiz-questions" className="row justify-content-center">
        {questions.map((question: any) => (
          <QuestionContainer question={question} />
        ))}
      </div>

      <div className=" d-flex justify-content-center">
        <button className="btn btn-secondary"
          onClick={createQuestionForQuiz}
        >+ New Question</button>
      </div>

      <hr />
    </div>
  );
}