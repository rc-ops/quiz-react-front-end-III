import React from 'react'

const Gabarito = ({ answers }) => {
    return (
        <div>
            <h1>Gabarito</h1>

            <h2>#01 - O que é front-end?</h2>
            <p>Resposta correta: B</p>
            <p>Sua resposta: {answers[0]}</p>

            <h2>#02 - O que é o React JS?</h2>
            <p>Resposta correta: A</p>
            <p>Sua resposta: {answers[1]}</p>

            <h2>#03 - Quais são as principais tecnologias do mundo Front-end?</h2>
            <p>Resposta correta: D</p>
            <p>Sua resposta: {answers[2]}</p>
        </div>
    )
}

export default Gabarito