const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (<div>
        <p>Please leave feedback</p>
        {options.map((option) => {return <button onClick ={onLeaveFeedback} type="button" name={option}>{option}</button>})
}
    </div>);
}

export default FeedbackOptions;