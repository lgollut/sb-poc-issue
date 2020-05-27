import React from 'react';

import { CustomPragma } from './CustomPragma';

export default {
  title: 'CustomPragma',
  component: CustomPragma,
};

export const Failing = () => {
  return <CustomPragma as={'div'}>{'emotion jsx'}</CustomPragma>;
};
