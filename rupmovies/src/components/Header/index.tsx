import * as React from 'react';
import { HeaderContainer } from './styles';
import logo from '../../images/netflix.png';
import { Link, useHistory } from 'react-router-dom';

const Header: React.FunctionComponent = (): JSX.Element => {
  const history = useHistory();

  const goToAddMoviePage = () => {
    history.replace('/add-movie');
  };
  return (
    <HeaderContainer>
      <Link to="./home">
        <img src={logo} alt="Rupmovies Logo" />
      </Link>
      <button onClick={goToAddMoviePage}> Adicionar </button>
    </HeaderContainer>
  );
};

export default Header;
