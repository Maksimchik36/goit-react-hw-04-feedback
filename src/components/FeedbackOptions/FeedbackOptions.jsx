import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (<div>
        {options.map((option) => {return <button key={option} onClick ={onLeaveFeedback} type="button" name={option}>{option}</button>})
}
    </div>);
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;