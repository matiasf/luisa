import React from "react";

import IntroductionVis from './components/info/intro/IntroductionVis';
import WelcomeInfo from './components/info/WelcomeInfo';
import Help from './components/info/Help';
import Privacy from './components/info/Privacy';
import AboutUs from './components/info/AboutUs';
import Images from './components/images/Images';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    initScrollingNav() {
        window.$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
            if (window.location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
                window.location.hostname === this.hostname) {
                let target = window.$(this.hash);
                target = target.length ? target : window.$('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    window.$('html, body').animate({
                        scrollTop: (target.offset().top - 56)
                    }, 1000, "easeInOutExpo");
                    return false;
                }
            }
        });

        window.$('.js-scroll-trigger').click(function () {
            window.$('.navbar-collapse').collapse('hide');
        });

        window.$('body').scrollspy({
            target: '#mainNav',
            offset: 56
        });
    }

    componentDidMount() {
        this.initScrollingNav()
    }

    render() {
        return <div className="App">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top"><strong>LUISA</strong></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#images">Imágenes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#welcomeinfo">Proyecto</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#help">Instrucciones</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#privacy">Privacidad</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#about-us">Quiénes Somos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="https://cruzar.uy/"
                                   target="_blank"><strong>CRUZAR</strong></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section className="bg-warning text-black parallax" id="page-top">
                <IntroductionVis/>
            </section>

            <section id="images">
                <Images/>
            </section>

            <section id="welcomeinfo" className="text-white parallax">
                <WelcomeInfo/>
            </section>


            <section id="help" className="text-white parallax">
                <Help/>
            </section>

            <section id="privacy" className="bg-light">
                <Privacy/>
            </section>

            <section id="about-us" className="text-white parallax">
                <AboutUs/>
            </section>

            <footer className="py-5 bg-dark">
                <div className="container">
                    <p className="m-0 text-center text-white">Copyright &copy; Your Website 2020</p>
                </div>
            </footer>
        </div>
    };
}

export default App;
