import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Logo from '../../assets/img/LogoMain.png';
import './menu.css';

function Menu() {
  return (
    <nav className='Menu'>
      <Link to='/'>
        <img className='Logo' src={Logo} alt='PodFlix Logo' />
      </Link>

      <Button as={Link} className='ButtonLink' to='/cadastro/video'>
        Novo Podcast
      </Button>
    </nav>
  );
}

export default Menu;
