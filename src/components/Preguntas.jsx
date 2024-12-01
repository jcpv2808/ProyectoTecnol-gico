import React, { useState, useRef } from 'react';
import arrow from '../assets/arrow.svg';

function Preguntas() {
    const [openQuestions, setOpenQuestions] = useState({ 0: false, 1: false, 2: false });
    const [height, setHeight] = useState({ 0: 0, 1: 0, 2: 0 });
    const answerRefs = useRef([]);

    const handleToggleQuestion = (index) => {
        setOpenQuestions((prev) => {
            const isOpen = !prev[index];
            const newHeight = isOpen ? answerRefs.current[index].scrollHeight : 0;

            setHeight((prevHeight) => ({
                ...prevHeight,
                [index]: newHeight,
            }));

            return {
                ...prev,
                [index]: isOpen,
            };
        });
    };

    return (
        <div>
            <section className="questions container">
                <h2 className="subtitle">Preguntas frecuentes</h2>
                <p className="questions__paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, porro doloribus neque perspiciatis sapiente fuga.</p>

                <section className="questions__container">
                    {[
                        {
                            question: '¿En donde nos ubicamos?',
                            answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos facere, quidem eum id excepturi assumenda explicabo nam accusamus veritatis voluptates eveniet adipisci, dicta nihil nemo modi possimus officiis quam atque?',
                        },
                        {
                            question: '¿Que servicios ofrecemos?',
                            answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos facere, quidem eum id excepturi assumenda explicabo nam accusamus veritatis voluptates eveniet adipisci, dicta nihil nemo modi possimus officiis quam atque?',
                        },
                        {
                            question: '¿Quienes nos respaldan?',
                            answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos facere, quidem eum id excepturi assumenda explicabo nam accusamus veritatis voluptates eveniet adipisci, dicta nihil nemo modi possimus officiis quam atque?',
                        },
                    ].map((item, index) => (
                        <article
                            key={index}
                            className={`questions__padding ${openQuestions[index] ? 'questions__padding--add' : ''}`}
                            onClick={() => handleToggleQuestion(index)}
                        >
                            <div className="questions__answer">
                                <h3 className="questions__title">
                                    {item.question}
                                    <span className={openQuestions[index] ? "questions__arrow questions__arrow--rotate" : "questions__arrow"}>
                                        <img src={arrow} className="questions__img" alt="arrow" />
                                    </span>
                                </h3>
                                <p
                                    ref={(el) => (answerRefs.current[index] = el)}
                                    className={`questions__show`}
                                    style={{
                                        height: `${height[index]}px`,
                                        transition: 'height 0.3s ease',
                                        overflow: 'hidden', 
                                    }}
                                >
                                    {item.answer}
                                </p>
                            </div>
                        </article>
                    ))}
                </section>
            </section>
        </div>
    );
}

export default Preguntas;
