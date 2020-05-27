import React from 'react';

import { CreateElement } from './CreateElement';

export default {
  title: 'CreateElement',
  component: CreateElement,
};

export const Working = ({ as, children }) => {
  return <CreateElement as={'div'}>{'React.CreateElement'}</CreateElement>;
};
