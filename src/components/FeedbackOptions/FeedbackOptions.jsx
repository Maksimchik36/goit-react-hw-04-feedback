import PropTypes from 'prop-types';
import { Button, Container } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (<Container>
        {options.map((option) => {
            return <Button key={option} onClick ={onLeaveFeedback} type="button" name={option}>{option}</Button>})
}
    </Container>);
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;