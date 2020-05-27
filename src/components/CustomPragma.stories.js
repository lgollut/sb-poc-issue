import React from 'react';

import { CustomPragma } from './CustomPragma';

export default {
  title: 'CustomPragma',
  component: CustomPragma,
  args: {
    as: 'div',
    children: 'emotion jsx',
  },
};

export const Failing = ({ as, children }) => {
  return <CustomPragma as={as}>{children}</CustomPragma>;
};
