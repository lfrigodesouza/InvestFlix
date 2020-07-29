import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Logo from '../../assets/img/LogoMain.png';
import './menu.css';

function Menu() {
  return (
    <nav className='Menu'>
      <Link to='/'>
        <img className='Logo' src={Logo} alt='InvestFlix Logo' />
      </Link>

      <Button as={Link} className='ButtonLink' to='/cadastro/video'>
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
