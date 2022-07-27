import React, { useState } from "react";
import Section from "../Section";
import Statistics from "../Statistics";
import FeedbackOptions from "../FeedbackOptions";
import Notification from "../Notification";

import { Container } from './App.styled';

const App = () => {
  // хуки
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // массив названий кнопок
  const buttonNames = ["good", "neutral", "bad"];
  

  // увеличивает на единицу значение отзывов в зависимости от нажатой кнопки
  const handleButtonClick = (event) => {
    switch (event.target.name) {
      case "good":
        setGood(prev => prev + 1);
        break;
      case "neutral":
        setNeutral(prev => prev + 1);
        break;
      case "bad":
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  };


  // считает общее количество отзывов
  const countTotalFeedback = () => {
    return good + neutral + bad;
  }


  // результат вызова функции записывается в переменную 
  const totalFeedback = countTotalFeedback();


  // считает процент положительных отзывов
  const countPositiveFeedbackPercentage = () => { 
    const goodMark = Number(good);
    return Math.round(goodMark / totalFeedback * 100) 
  };

  
   return (
    <Container>
      <Section title = "Please leave feedback">
          <FeedbackOptions 
             options={buttonNames} 
             onLeaveFeedback={handleButtonClick}
          ></FeedbackOptions>
      </Section>
           
       {totalFeedback === 0 ? 
            <Notification message="There is no feedback"></Notification>
            : <Section title="Statistics:">
                <Statistics                                                      
                   good={good} 
                   neutral={neutral} 
                   bad={bad} 
                   total={countTotalFeedback()} 
                   positivePercentage={countPositiveFeedbackPercentage() || 0}
                 ></Statistics>
              </Section>}
    </Container>      
  );
};

export default App;
