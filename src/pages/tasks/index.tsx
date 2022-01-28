import React from 'react';
import {Background} from '../../global/styles';

import TaskList from './taskList';

const Tasks: React.FC = () => {
  return (
    <Background>
      <TaskList />
    </Background>
  );
};

export default Tasks;
