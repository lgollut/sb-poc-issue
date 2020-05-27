import React from 'react';

import { CustomPragma } from './CustomPragma';

export default {
  title: 'CustomPragma',
  component: CustomPragma,
};

export const Working = () => {
  return <CustomPragma>{'jsx with emotion pragma'}</CustomPragma>;
};
