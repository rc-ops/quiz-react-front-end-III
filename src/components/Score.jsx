import React, { useState } from 'react'
import Gabarito from './Gabarito';

const Score = ({ userAnswers }) => {
  let score = 0;

  const calculoScore = () => {
    if (userAnswers[0] == "B") {
      score++;
    }
    if (userAnswers[1] == "A") {
      score++;
    }
    if (userAnswers[2] == "D") {
      score++;
    }
    return score;
  }

  let pontuacaoFinal = calculoScore();

  return (
    <div>
      <h1>Sua pontuação foi {pontuacaoFinal}</h1>
    </div>
  )
}

export default Score