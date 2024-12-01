import React, { useEffect } from 'react';
import logo from '../assets/logo.png';
import closeSvg from '../assets/close.svg';
import menuSvg from '../assets/menu.svg';
import { Link } from 'react-router-dom';

function Header() {
    useEffect(() => {
        const openButton = document.querySelector('.nav__menu');
        const menu = document.querySelector('.nav__link');
        const closeMenu = document.querySelector('.nav__close');

        openButton.addEventListener('click', () => {
            menu.classList.add('nav__link--show');
        });

        closeMenu.addEventListener('click', () => {
            menu.classList.remove('nav__link--show');
        });

        // Limpieza para evitar duplicación de eventos al desmontar el componente
        return () => {
            openButton.removeEventListener('click', () => {
                menu.classList.add('nav__link--show');
            });
            closeMenu.removeEventListener('click', () => {
                menu.classList.remove('nav__link--show');
            });
        };
    }, []);

    return (
        <div>
            <header className="hero">
                <nav className="nav nav_bg">
                    <Link to="/" className="navLogoLink">
                        <div className="nav_logo-container">
                            <div className="nav_logo">
                                <img src={logo} className="logo_nav" alt="Logo" />
                                <div>
                                    <h2 className="nav__title">El Hornero</h2>
                                    <p className="nav_subtitle">Parrilladas</p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <ul className="nav__link nav__link--menu">
                        <li className="nav__items">
                            <Link to="/Reservas" className="nav__links">Reservas</Link>
                        </li>
                        <li className="nav__items">
                            <Link to="/Locales" className="nav__links">Locales</Link>
                        </li>
                        <li className="nav__items">
                            <Link to="/Contacto" className="nav__links">Contacto</Link>
                        </li>
                        <img src={closeSvg} className="nav__close" alt="Close Menu" />
                    </ul>

                    <div className="nav__menu">
                        <img src={menuSvg} className="nav__img" alt="Menu" />
                    </div>
                </nav>

                <section className="hero__container container">
                    <h1 className="hero__title">Carnes y Parrillas</h1>
                    <p className="hero__paragraph">Fue fundado hace más de 20 años, Armando Tafur siguió un sueño
                        de éxito, tener el Restaurante con las mejores Carnes y Parrillas de Lima. Abriendo así su primer
                        restaurante “El HORNERO” en el emblemático distrito de Chorrillos.</p>
                    <Link to="/Reservas" className="cta">Reservar</Link>
                </section>
            </header>
        </div>
    );
}

export default Header;
