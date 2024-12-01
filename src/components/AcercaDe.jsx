import React from 'react'

function AcercaDe() {
  return (
    <div>
        <section className="container about">
            <h2 className="subtitle">Acerca de nosotros...</h2>
            <p className="about__paragraph">Con mas de 20 años de experiencia, en el <b>El Hornero</b> encontraras las mejores Carnes y Parrillas de Lima</p>

            <div className="about__main">
                <article className="about__icons">
                    <svg className="icon_acercaDe bi bi-bullseye" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12"/>
                        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/>
                        <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                      </svg>
                    <h3 className="about__title">Mision</h3>
                    <p className="about__paragrah">"Ser el mejor restaurante, reconocido por calidad, sabor y experiencia inolvidable."</p>
                </article>

                <article className="about__icons">
                    <svg className="icon_acercaDe bi bi-eye" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                      </svg>
                    <h3 className="about__title">Vision</h3>
                    <p className="about__paragrah">"Ofrecer platos tradicionales con pasión, excelente servicio y ambiente acogedor."</p>
                </article>

                <article className="about__icons">
                    <svg className="icon_acercaDe bi bi-gem" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z"/>
                      </svg>
                    <h3 className="about__title">Valores</h3>
                    <p className="about__paragrah">"Calidad, innovación, respeto y pasión guían cada plato que servimos diariamente."</p>
                </article>
            </div>
        </section>
    </div>
  )
}

export default AcercaDe