import React from 'react';
import Header from '../../components/Header';
import {Background} from '../../global/styles';

import TaskList from './taskList';

const Tasks: React.FC = () => {
  return (
    <Background>
      <Header title="teste" />
      <TaskList />
    </Background>
  );
};

export default Tasks;
