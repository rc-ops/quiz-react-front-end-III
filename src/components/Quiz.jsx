import React, { useState, useRef } from 'react'
import Score from './Score';

const Quiz = () => {
    const [userAnswers, setUserAnswers] = useState([]);
    const [showScore, setShowScore] = useState(false);

    const handleChooseAnswerClick = (answer, buttonClass) => {
        setUserAnswers([...userAnswers, answer]);
        console.log("Resposta: " + answer);

        const buttons = document.querySelectorAll("." + buttonClass);
        buttons.forEach((button) => { button.disabled = true });
    }

    const handleFinishQuizClick = () => {
        if (userAnswers.length < questions.length) {
            alert("Por favor responda todas as questões antes de finalizar.")
            return;
        }
        setShowScore(true);

    }

    const questions = [
        {
            questionText: 'O que é Front-end?',
            answerOptions: [
                { alternative: 'Parte de um sistema que é oculta para o usuário', isCorrect: false },
                { alternative: 'Parte de um sistema que é visível e interativa ao usuário', isCorrect: true },
                { alternative: 'Parte lógica que recebe as regras de negócio', isCorrect: false },
                { alternative: 'Nenhuma das alternativas anteriores', isCorrect: false }
            ],
        },
        {
            questionText: 'O que é ReactJS?',
            answerOptions: [
                { alternative: 'Uma poderosa biblioteca JavaScript', isCorrect: true },
                { alternative: 'Uma linguagem de programação', isCorrect: false },
                { alternative: 'Um servidor de Cloud', isCorrect: false },
                { alternative: 'Todas as respostas anteriores', isCorrect: false }
            ],
        },
        {
            questionText: 'Quais são as principais tecnologias do mundo front-end?',
            answerOptions: [
                { alternative: 'Java, Golang e Python', isCorrect: false },
                { alternative: 'AWS, Google Cloud e Azure', isCorrect: false },
                { alternative: 'Kotlin, HTML e CSS', isCorrect: false },
                { alternative: 'HTML, CSS e JavaScript', isCorrect: true }
            ],
        }
    ];



    return (
        showScore ?
            (<Score userAnswers = {userAnswers}/>)
            : (
                <>
                    <div className="perguntas">
                        <h2>#1 - O que é front-end?</h2>
                        <p>a) Parte de um sistema que é oculta para o usuário <button className='botao1' onClick={() => { handleChooseAnswerClick("A", "botao1") }}>Escolher</button></p>
                        <p>b) Parte de um sistema que é visível e interativa para o usuário <button className="botao1" onClick={() => { handleChooseAnswerClick("B", "botao1") }}>Escolher</button></p>
                        <p>c) Parte lógica que recebe as regras de negócio <button className="botao1" onClick={() => { handleChooseAnswerClick("C", "botao1") }}>Escolher</button></p>
                        <p>d) Nenhuma das alternativas anteriores <button className="botao1" onClick={() => { handleChooseAnswerClick("D", "botao1") }}>Escolher</button></p>

                        <h2>#2 - O que é o React JS?</h2>
                        <p>a) Uma poderosa biblioteca JavaScript <button className='botao2' onClick={() => { handleChooseAnswerClick("A", "botao2") }}>Escolher</button></p>
                        <p>b) Uma linguagem de programação <button className='botao2' onClick={() => { handleChooseAnswerClick("B", "botao2") }}>Escolher</button></p>
                        <p>c) Um servidor de Cloud <button className='botao2' onClick={() => { handleChooseAnswerClick("C", "botao2") }}>Escolher</button></p>
                        <p>d) Todas as respostas anteriores <button className='botao2' onClick={() => { handleChooseAnswerClick("D", "botao2") }}>Escolher</button></p>


                        <h2>#3 - Quais são as principais tecnologias do mundo Front-end?</h2>
                        <p>a) Java, Golang e Python <button className='botao3' onClick={() => { handleChooseAnswerClick("A", "botao3") }}>Escolher</button></p>
                        <p>b) AWS, Google Cloud e Azure <button className='botao3' onClick={() => { handleChooseAnswerClick("B", "botao3") }}>Escolher</button></p>
                        <p>c) Kotlin, HTML e CSS <button className='botao3' onClick={() => { handleChooseAnswerClick("C", "botao3") }}>Escolher</button></p>
                        <p>d) HTML, CSS e JavaScript <button className='botao3' onClick={() => { handleChooseAnswerClick("D", "botao3") }}>Escolher</button></p>
                    </div>

                    <div className="finalizar">
                        <button onClick={handleFinishQuizClick}>Finalizar</button>
                    </div>
                </>
            )
    )
}
export default Quiz