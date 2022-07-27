import PropTypes from 'prop-types';
import { Container, List, Item } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => { 
  return (<Container>
    <List>
    <Item><span>Good: </span> { good }</Item>
    <Item><span>Neutral: </span> { neutral } </Item>
    <Item><span>Bad: </span> { bad } </Item>    
    <Item>Total: {total}</Item>
    <Item>Positive feedback: {positivePercentage || 0}%</Item>
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