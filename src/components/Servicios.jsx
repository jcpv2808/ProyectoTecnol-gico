import React, { useState } from 'react'
import leftArrow from '../assets/leftarrow.svg'
import rightArrow from '../assets/rightarrow.svg'
import vinos from '../assets/vinos.jpg'
import carnes from '../assets/carnes.jpg'
import local from '../assets/local.jpg'

function Servicios() {
    const [currentTestimony, setCurrentTestimony] = useState(1)

    const handleLeftArrowClick = () =>{
        if(currentTestimony == 1){
            setCurrentTestimony(3)
            console.log(currentTestimony)
        }else{
            setCurrentTestimony(currentTestimony-1)
            console.log(currentTestimony)
        }
    } 
    
    const handleRightArrowClick = () =>{
        if(currentTestimony == 3){
            setCurrentTestimony(1)
            console.log(currentTestimony)
        }else{
            setCurrentTestimony(currentTestimony+1)
            console.log(currentTestimony)
        }
    } 

    return (
        <section className="testimony">
            <div className="testimony__container container">
                <img src={leftArrow} className="testimony__arrow" id="before" onClick={handleLeftArrowClick}/>

                <div className={
                    currentTestimony==1
                        ?"testimony__body testimony__body--show"
                        :"testimony__body"}>
                    <div className="testimony__texts">
                        <h2 className="subtitle">Maridaje</h2>
                        <p className="testimony__review">El Hornero, te brinda una amplia selección de vinos, los cuales serán de gran compañía en la degustación de tus cortes de carne favoritos.</p>

                    </div>

                    <figure className="testimony__picture">
                        <img src={vinos} className="testimony__img" />
                    </figure>
                </div>

                <div className={
                    currentTestimony==2
                        ?"testimony__body testimony__body--show"
                        :"testimony__body"}>
                    <div className="testimony__texts">
                        <h2 className="subtitle">Cortes de carne</h2>
                        <p className="testimony__review">Nuestros cortes de carne incluyen bife angosto, lomo fino, entraña, picanha, y asado de tira. Estos cortes se caracterizan por su jugosidad, ternura, y sabor intenso.</p>
                    </div>

                    <figure className="testimony__picture">
                        <img src={carnes} className="testimony__img"/>
                    </figure>
                </div>

                <div className={
                    currentTestimony==3
                        ?"testimony__body testimony__body--show"
                        :"testimony__body"}>
                    <div className="testimony__texts">
                        <h2 className="subtitle">Infraestructura</h2>
                        <p className="testimony__review">Nuestra infraestructura combina un ambiente rústico y moderno, con amplios espacios, decoración elegante, parrillas visibles, y áreas al aire libre, creando una experiencia acogedora y gastronómica única.</p>
                    </div>

                    <figure className="testimony__picture">
                        <img src={local} className="testimony__img"/>
                    </figure>
                </div>

                <img src={rightArrow} className="testimony__arrow" id="next" onClick={handleRightArrowClick}/>
            </div>
        </section>

    )
}

export default Servicios