import * as React from 'react';
import { HeaderContainer } from './styles';
import logo from '../../images/netflix.png';

const Header: React.FunctionComponent = (): JSX.Element => {
  return (
    <HeaderContainer>
      <img src={logo} alt="Rupmovies Logo" />
      <button> Adicionar </button>
    </HeaderContainer>
  );
};

export default Header;
