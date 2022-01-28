import React from 'react';

import {Font} from '../../../global/styles';
import {TaskBackground} from './styles';

interface Props {
  title: string;
}

const Task: React.FC<Props> = ({title}) => {
  return (
    <TaskBackground>
      <Font>{title}</Font>
    </TaskBackground>
  );
};

export default Task;
