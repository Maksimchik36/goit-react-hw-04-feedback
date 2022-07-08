import PropTypes from 'prop-types';
import { Container, List } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => { 
  return (<Container>
  <List><li>Good: {good}</li>
    <li>Neutral: {neutral}</li>
    <li>Bad: {bad}</li>
    <li>Total: {total}</li>
    <li>Positive feedback: {positivePercentage || 0}%</li>
  </List>  
  </Container>
  )    
  }

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;