import React, { useContext} from 'react';
import {FlatList, View} from 'react-native';

import Task from '../task';
import {TaskListContainer} from './styles';
import { TaskContext } from '../../../contexts/Tasks';


const TaskList: React.FC = () => {
  

	const {TaskList} = useContext(TaskContext);

	return (
		<TaskListContainer>
			<View>
				<FlatList
					data={TaskList}
					keyExtractor={item => item.id}
					renderItem={({item, index}) => <Task index={index} title={item.title} />}
				/>
			</View>
		</TaskListContainer>
	  );
};

export default TaskList;
