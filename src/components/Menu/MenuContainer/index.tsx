import React from 'react';
import { Modal } from 'react-native';
import { ScrollView } from 'react-native';
import { Backdrop, MenuBox, ContentContainer } from './styles';

const MenuContainer: React.FC = ({children}) => {
	return (
		<Modal
			transparent={true}
			visible={true}
			animationType="slide"
		>
			<Backdrop>
				<MenuBox>
					<ContentContainer>
						<ScrollView style={{flex: 1}}>
							{children}
						</ScrollView>
					</ContentContainer>
				</MenuBox>
			</Backdrop>
		</Modal>
		
	);
};

export default MenuContainer;
