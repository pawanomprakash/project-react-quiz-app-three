import React from 'react'
import './styles.css'
import quizQuestions from './quizQuestion.json'
import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function QuizComponent() {
    // console.log(quizQuestions)
    const [qNo,setqNo]=useState(0)
    const [question, setQuestion] = useState(quizQuestions[qNo])
    const [score,setScore]=useState(0)
    
    const alertAnswer=(e)=>{
       let answer= quizQuestions[qNo].answer;
       if(answer==e.target.textContent){
        alert("Correct answer")
        setScore((score)=>(score+1))
        if(qNo>=0 && qNo<=13){
            setqNo(n=>n+1)
            setQuestion(quizQuestions[qNo+1])}
       }else{
        alert("Wrong answer")
        if(qNo>=0 && qNo<=13){
            setqNo(n=>n+1)
            setQuestion(quizQuestions[qNo+1])}
        }
    }

    const previous=()=>{
        // console.log(qNo)
        if(qNo>0 && qNo<=14){
        setqNo(n=>n-1)
        setQuestion(quizQuestions[qNo-1])}
    }
    const next=()=>{
        // console.log(qNo)
        if(qNo>=0 && qNo<=13){
        setqNo(n=>n+1)
        setQuestion(quizQuestions[qNo+1])}
    }
    const quit=()=>{
      if(window.confirm("Are you sure, you want to quit?")){
        setqNo(0)
        setScore(0)
        setQuestion(quizQuestions[0])}
    }


  return (
        <div id="quizComponent">
        <div id="container">
            <h1 id="quizComponentHeading">Question</h1>
            <p id="questionNum">{qNo+1} of 15 </p>
            <p id="question">{question.question}</p>
            <div id="options-container">
                <button className="options" onClick={alertAnswer}>{question.optionA}</button>
                <button className="options" onClick={alertAnswer}>{question.optionB}</button>
                <button className="options" onClick={alertAnswer}>{question.optionC}</button>
                <button className="options" onClick={alertAnswer}>{question.optionD}</button>
            </div>
            <div id="actions-container">
                <button className="actions" onClick={previous} id="previous">Previous</button>
                <button className="actions" onClick={next} id="next">Next</button>
                <button className="actions" onClick={quit}id="quit">Quit</button>
                <Link to="/project-react-quiz-app-three/result" state={{score:score,questionsCount:qNo}}>
                <button className="actions" id="finish">Finish</button>
                </Link>
            </div>
        </div>
      </div>
    
  )
}