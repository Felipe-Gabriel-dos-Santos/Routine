import React from 'react';

import {Font} from '../../../global/styles';
import {DeleteView, TaskBackground} from './styles';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

interface TaskProps {
  title: string;
}

const Task: React.FC<TaskProps> = ({title}) => {

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
		>
			<View>
				<TaskBackground>
					<Font>{title}</Font>
				</TaskBackground>
			</View>
		</Swipeable>
	);
};

export default Task;
