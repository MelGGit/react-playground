import * as React from 'react'
import './Card.css'

export default function Card({
  category,
  question,
  correctAnswer,
  tagList,
  showAnswer,
  checked,
}) {
  return (
    <section className="Card">
      <h2 className="Card__type">{category}</h2>
      <p className="Card__question">{question}</p>
      <p
        className={
          showAnswer ? 'Card__answer' : 'Card__answer Card__hideAnswer'
        }
      >
        {correctAnswer}
      </p>
      <ul className="Card__tagList">
        {tagList.map(tag => {
          return (
            <li key={tag} className="Card__tag">
              {tag}
            </li>
          )
        })}
      </ul>
      <button className={checked ? 'bookmark checked' : 'bookmark'}></button>
    </section>
  )
}
