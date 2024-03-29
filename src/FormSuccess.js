import React from 'react'
import logo from './img/logo.png'
// import video1 from './img/video1.jpg'
// import video2 from './img/video2.jpg'

const FormSuccess = ({ uniqueCodeToShow }) => {

    return (
        <div>
            <div className="main">
                <div className="izq">
                </div>
                <div className="der">
                    <h1 className="font-weight-bold">ESTÁS CADA VEZ MÁS CERCA DE ENFRENTARTE A LOS MEJORES</h1>
                    <hr className="hr-suc" style={{marginBottom: 20, marginTop: 10}} />
                    <p className="first-p-success">El torneo iniciará el día 15 de Agosto a las 15hs. Para continuar con tu registro debes ingresar a la página del torneo y colocar tu código único.</p>
                    <p className="codigo">{uniqueCodeToShow}</p>
                    <div className="centrar">
                        <button
                            className="btn btn-danger"
                            id="aceptar-success"
                            type="submit"
                        >
                            <a
                                href="https://battlefy.com/red-bull-colombia-torneo-1x1-janoz/fifa-20-1x1-janoz-edici%C3%B3n-2021-redbull/609029b42acade3e85b255e3/info?infoTab=details"
                                style={{color: 'white'}}
                                target="_blank"
                                rel="noreferrer"
                            >
                                WEB DEL TORNEO
                            </a>
                        </button>
                    </div>
                    <p className="last-p-success">Ingresa a nuestro sevidor oficial de Discord para poder resolver todas tus dudas.</p>
                    <div className="centrar">
                        <button
                            className="btn btn-danger"
                            id='last-btn'
                            type="submit"
                        >
                            <a
                                href="https://discord.gg/VrKWC6K"
                                style={{color: 'white'}}
                                target="_blank"
                                rel="noreferrer"
                            >
                                DISCORD
                            </a>
                        </button>
                    </div>
                    <p className="last-p-success">El torneo es exclusivo para la consola PS4</p>
                </div>
            </div>
            <div className="footer">
                <img src={logo} alt="tournament-logo" />
                <p className="p-footer">Ni Electronic Arts Inc. ni sus licenciantes están afiliados a este torneo y tampoco lo patrocinan.</p>
                <p className="p-footer">El torneo se jugará en PlayStation 4 y con el título FIFA21.</p>
            </div>
        </div>
    )
}

export default FormSuccess
