import React from 'react';

import {Title} from '../../global/styles';
import {HeaderContainer} from './styles';

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({title}) => {
	return (
		<HeaderContainer>
			<Title>{title}</Title>
		</HeaderContainer>
	);
};

export default Header;
