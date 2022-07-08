import PropTypes from 'prop-types';
import { Container } from './Section.styled';

const Section = ({ title, children }) => {
    return (<Container>{title}{children}</Container>)
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Section;