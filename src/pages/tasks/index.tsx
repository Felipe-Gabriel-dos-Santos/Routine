import React from 'react';
import Header from '../../components/Header';
import {Background} from '../../global/styles';
import TaskProvider from '../../contexts/Tasks';

import TaskList from './taskList';

const Tasks: React.FC = () => {
	return (
		<TaskProvider>
			<Background>
				<Header title="Routine" />
				<TaskList />
			</Background>
		</TaskProvider>
    
	);
};

export default Tasks;
