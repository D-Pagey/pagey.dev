import React from 'react';
import { arrayOf, string } from 'prop-types';

const Paragraphs = ({ items }) => {
    return (
        <div>
            {items.map((item) => (
                <p key={item}>{item}</p>
            ))}
        </div>
    );
};

Paragraphs.propTypes = {
    items: arrayOf(string).isRequired
};

export default Paragraphs;
