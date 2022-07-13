import PropTypes from 'prop-types';
import { Container, List, Item } from './Statistics.styled';

const Statistics = ({ options, total, positivePercentage }) => { 
  return (<Container>
  <List>{options.map(option=>(<Item key={option[0]}>{option[0]}: {option[1]}</Item>))}</List>
  <List>
    <Item>Total: {total}</Item>
    <Item>Positive feedback: {positivePercentage || 0}%</Item>
  </List>  
  </Container>
  )    
  }

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired]).isRequired).isRequired).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;