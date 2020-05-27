import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

export function CustomPragma({ as = 'div', children }) {
  return jsx(as, {}, children);
}

CustomPragma.propTypes = {
  /**
   * The component to use as root element
   */
  as: PropTypes.oneOf(['div', 'span']),

  /**
   * The text to display.
   */
  children: PropTypes.string,
};
