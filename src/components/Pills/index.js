import React from 'react';
import { arrayOf, string } from 'prop-types';
import * as S from './styles';

const Pills = ({ colour, items }) => {
  return (
    <S.List>
      {items.map((item) => (
        <S.Pill colour={colour} key={item}>
          {item}
        </S.Pill>
      ))}
    </S.List>
  );
};

Pills.propTypes = {
  colour: string,
  items: arrayOf(string).isRequired
};

Pills.defaultProps = {
  colour: ''
};

export default Pills;
