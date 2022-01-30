import React, {useContext} from 'react';

import {Font} from '../../../global/styles';
import {DeleteView, TaskBackground} from './styles';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import  {TaskContext}  from '../../../contexts/Tasks';

interface TaskProps {
	index: number;
	title: string;
}

const Task: React.FC<TaskProps> = ({index, title}) => {

	const {TaskList, setTaskList} = useContext(TaskContext);

	const Title = title.charAt(0).toUpperCase() + title.slice(1);

	function DeleteTask(index: number){
		
		const List = [...TaskList];

		List.splice(index, 1);
		setTaskList(List);
	}

	function RightActions(){
		return (
			<DeleteView>
				<EvilIcons name="trash" size={40} color='#ffffff' />
			</DeleteView>
		);
	}

	return (
		<Swipeable
			renderRightActions={RightActions}
			onSwipeableRightOpen={() => DeleteTask(index)}
			
		>
			<View>
				<TaskBackground>
					<Font>{Title}</Font>
				</TaskBackground>
			</View>
		</Swipeable>
	);
};

export default Task;
