import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'grommet';
import _ from 'lodash';

const Input = (props) => {
  const {
    label, value, onChange, ...otherProps
  } = props;
  return (
    <TextInput
      focus={false}
      key={label}
      id={_.snakeCase(label)}
      value={value || ''}
      placeHolder={_.startCase(label)}
      onChange={e => onChange(e.target.value)}
      {...otherProps}
    />
  );
};

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  label: '',
  value: '',
  onChange: null,
};

export default Input;