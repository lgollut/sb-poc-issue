/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

export function CustomPragma({ children }) {
  return <div>{children}</div>;
}

CustomPragma.propTypes = {
  /**
   * The text to display.
   */
  children: PropTypes.string,
};
