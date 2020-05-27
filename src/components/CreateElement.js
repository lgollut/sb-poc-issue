import React from 'react';
import PropTypes from 'prop-types';

export function CreateElement({ as = 'div', children }) {
  return React.createElement(as, {}, children);
}

CreateElement.propTypes = {
  /**
   * The component to use as root element
   */
  as: PropTypes.oneOf(['div', 'span']),

  /**
   * The text to display.
   */
  children: PropTypes.string,
};
