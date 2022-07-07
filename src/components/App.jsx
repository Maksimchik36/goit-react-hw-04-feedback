import React, {Component} from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";

class App extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
  good: 0,
  neutral: 0,
  bad: 0
    }
    
  handleButtonClick = (event) => {
    this.setState(prevState => {
      return { [event.target.name]: prevState[event.target.name] + 1 }
    })
  };
  
  countTotalFeedback = ()=>{return Number(this.state.good)+Number(this.state.neutral)+Number(this.state.bad)};
  countPositiveFeedbackPercentage = () => { return Math.round(Number(this.state.good)/this.countTotalFeedback()*100)};

  render() {
   return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
        {/* React homework template */}
      <p>Please leave feedback</p>
      <button onClick ={this.handleButtonClick} type="button" name="good">Good</button>
      <button onClick ={this.handleButtonClick} type="button" name="neutral">Neutral</button>
      <button onClick={this.handleButtonClick} type="button" name="bad">Bad</button>

      <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.handleButtonClick}></FeedbackOptions>


      <Statistics 
      good={this.state.good} 
      neutral={this.state.neutral} 
      bad={this.state.bad} 
      total={this.countTotalFeedback()} 
      positivePercentage={this.countPositiveFeedbackPercentage() || 0}
      ></Statistics>
    </div>      
  );
  }
};

export default App;
