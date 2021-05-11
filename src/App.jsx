import * as React from 'react'
import Card from './Card'
import Header from './Header'
import Pagination from './Pagination'
import trivia from './api.php.json'
import './App.css'

export default () => {
  return (
    <div className="App">
      {trivia.map(el => {
        const { category, question, correct_answer, incorrect_answers } = el
        return (
          <Card
            key={correct_answer}
            category={category}
            question={question}
            correctAnswer={correct_answer}
            tagList={incorrect_answers}
          />
        )
      })}
    </div>
  )
}
