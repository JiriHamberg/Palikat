import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.p`
    color: ${props => props.color};
    font-size: 20px;
    text-align: center;
`;
Text.displayName = 'Text';

const Example = props => {
    const { color, text } = props;
    return <Text color={ color }>{ text }</Text>;
}

export default Example;

Example.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string
}

Example.defaultProps = {
    color: '#990000'
}