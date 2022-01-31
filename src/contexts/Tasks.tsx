import React, {createContext, useState} from 'react';



import { ITask, ITaskProvider } from '../@types/styles/task/task';

const List: Array<ITask> = [
	{
		id: '1',
		title: 'Teste',
	},

	{
		id: '2',
		title: 'teste 2',
	},

	{
		id: '3',
		title: 'Teste 3',
	},

	{
		id: '4',
		title: 'Teste 4',
	},

	{
		id: '5',
		title: 'Teste',
	},

	{
		id: '6',
		title: 'teste 2',
	},

	{
		id: '7',
		title: 'Teste 3',
	},

	{
		id: '8',
		title: 'Teste 4',
	},
	{
		id: '9',
		title: 'Teste 4',
	},

	{
		id: '10',
		title: 'Teste',
	},

	{
		id: '11',
		title: 'teste 2',
	},

	{
		id: '12',
		title: 'Teste 3',
	},

	{
		id: '13',
		title: 'Teste 4',
	},
];

export const TaskContext = createContext<ITaskProvider>({} as ITaskProvider);



const TaskProvider: React.FC = ({children}) => {
    
	const [TaskList, setTaskList] = useState<Array<ITask>>(List);
    
	return (
		<TaskContext.Provider value={{TaskList, setTaskList}}>
			{children}
		</TaskContext.Provider>
	);
};

export default TaskProvider;
