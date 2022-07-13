import React, { Component } from "react";
import Section from "../Section";
import Statistics from "../Statistics";
import FeedbackOptions from "../FeedbackOptions";
import Notification from "../Notification";

import { Container } from './App.styled';

class App extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
  good: 0,
  neutral: 0,
  bad: 0,
  }
    
  handleButtonClick = (event) => {
    this.setState(prevState => {
      return { [event.target.name]: prevState[event.target.name] + 1 }
    })
  };
  
  countTotalFeedback = ()=>{
    return Object.values(this.state).reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);
 
  };
  
  countPositiveFeedbackPercentage = () => { 
    const goodMark = Number(this.state.good);
    return Math.round(goodMark / this.countTotalFeedback() * 100) 
  };

  render() {
   const totalFeedback = this.countTotalFeedback();

   return (
    <Container>
      <Section title = "Please leave feedback">
          <FeedbackOptions 
             options={Object.keys(this.state)} 
             onLeaveFeedback={this.handleButtonClick}
          ></FeedbackOptions>
      </Section>
           
       {totalFeedback === 0 ? 
            <Notification message="There is no feedback"></Notification>
            : <Section title="Statistics:">
                <Statistics          
                  options={Object.entries(this.state)}                                              
                  //  good={this.state.good} 
                  //  neutral={this.state.neutral} 
                  //  bad={this.state.bad} 
                   total={this.countTotalFeedback()} 
                   positivePercentage={this.countPositiveFeedbackPercentage() || 0}
                 ></Statistics>
              </Section>}
    </Container>      
  );
  }
};

export default App;
