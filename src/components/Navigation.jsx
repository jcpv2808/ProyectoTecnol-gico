import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import closeSvg from '../assets/close.svg';
import menuSvg from '../assets/menu.svg';

import './Navigation.css';

function Navigation() {
    useEffect(() => {
        const openButton = document.querySelector('.nav__menu');
        const menu = document.querySelector('.nav__link');
        const closeMenu = document.querySelector('.nav__close2');

        const openMenuHandler = () => {
            menu.classList.add('nav__link--show');
        };

        const closeMenuHandler = () => {
            menu.classList.remove('nav__link--show');
        };

        openButton.addEventListener('click', openMenuHandler);
        closeMenu.addEventListener('click', closeMenuHandler);

        // Limpia los eventos cuando el componente se desmonta
        return () => {
            openButton.removeEventListener('click', openMenuHandler);
            closeMenu.removeEventListener('click', closeMenuHandler);
        };
    }, []);

    return (
        <nav className="nav navCustom nav_bg justify-content-between">
            <Link to="/" className="navLogoLink">
                <div className="nav_logo-container">
                    <div className="nav_logo nav_logoCustom">
                        <img src={logo} className="logo_nav" alt="El Hornero Logo" />
                        <div>
                            <h2 className="nav__title nav__titleCustom">El Hornero</h2>
                            <p className="nav_subtitle nav_subtitleCustom">Parrilladas</p>
                        </div>
                    </div>
                </div>
            </Link>

            <div className="nav__link nav__link--menu navCustom_nav__link--menu">
                <ul className="row">
                    <li className="nav__items col-sm-12 col-lg-3 mx-3">
                        <Link to="/Reservas" className="nav__links">Reservas</Link>
                    </li>
                    <li className="nav__items col-sm-12 col-lg-3 mx-3">
                        <Link to="/Locales" className="nav__links">Locales</Link>
                    </li>
                    <li className="nav__items col-sm-12 col-lg-3 mx-3">
                        <Link to="/Contacto" className="nav__links">Contacto</Link>
                    </li>

                    <img src={closeSvg} className="nav__close2" alt="Close menu" />
                </ul>
            </div>

            <div className="nav__menu">
                <img src={menuSvg} className="nav__img" alt="Open menu" />
            </div>
        </nav>
    );
}

export default Navigation;
