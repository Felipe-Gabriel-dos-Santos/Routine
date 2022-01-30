import React from 'react';
import {FlatList, View} from 'react-native';

import Task from '../task';
import {TaskListContainer} from './styles';

const TaskList: React.FC = () => {
  interface Task {
    id: string;
    title: string;
  }

  const List: Array<Task> = [
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

  return (
  	<TaskListContainer>
  		<View>
  			<FlatList
  				data={List}
  				keyExtractor={item => item.id}
  				renderItem={({item}) => <Task title={item.title} />}
  			/>
  		</View>
  	</TaskListContainer>
  );
};

export default TaskList;
