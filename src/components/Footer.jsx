import React from 'react'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import youtube from '../assets/youtube.svg'

function Footer() {
    return (
        <footer className="footer">
            <section className="footer__container container">
                <nav className="nav nav--footer">
                    <h2 className="footer__title">El Hornero</h2>

                    <ul className="nav__link nav__link--footer">
                        <li className="nav__items">
                            <a href="#" className="nav__links">Inicio</a>
                        </li>
                        <li className="nav__items">
                            <a href="#" className="nav__links">Acerca de</a>
                        </li>
                        <li className="nav__items">
                            <a href="#" className="nav__links">Contacto</a>
                        </li>
                        <li className="nav__items">
                            <a href="#" className="nav__links">Blog</a>
                        </li>
                    </ul>
                </nav>

                <form className="footer__form" action="https://formspree.io/f/mknkkrkj" method="POST">
                    <h2 className="footer__newsletter">Suscribete a la newsletter</h2>
                    <div className="footer__inputs">
                        <input type="email" placeholder="Email:" className="footer__input" name="_replyto" />
                        <input type="submit" value="Registrate" className="footer__submit" />
                    </div>
                </form>
            </section>

            <section className="footer__copy container">
            <div className="footer__social">
                <a href="#" className="footer__icons"><img src={facebook} className="footer__img"/></a>
                <a href="#" className="footer__icons"><img src={twitter} className="footer__img"/></a>
                <a href="#" className="footer__icons"><img src={youtube} className="footer__img"/></a>
            </div>

            <h3 className="footer__copyright">Derechos reservados &copy; Grupo 4</h3>
        </section>
        </footer>
    )
}

export default Footer