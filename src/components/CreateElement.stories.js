import React from 'react';

import { CreateElement } from './CreateElement';

export default {
  title: 'CreateElement',
  component: CreateElement,
  args: {
    as: 'div',
    children: 'React.CreateElement',
  },
};

export const Working = ({ as, children }) => {
  return <CreateElement as={as}>{children}</CreateElement>;
};
