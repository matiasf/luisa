import React, {Suspense} from "react";
import {withTranslation} from 'react-i18next'
import './i18n';

import IntroductionVis from './components/intro/IntroductionVis';
import WelcomeInfo from './localized-content-component/WelcomeInfo';
import Help from './localized-content-component/Help';
import Privacy from './localized-content-component/Privacy';
import AboutUs from './localized-content-component/AboutUs';
import Images from './components/images/Images';

class App extends React.Component {

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.initScrollingNav()
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
    }

    changeLenguage(lenguage) {
        const {i18n} = this.props;
        i18n.changeLanguage(lenguage);
    }

    render() {
        const {t} = this.props;
        return <div className="App">
            <Suspense fallback={
                <div className="spinner-grow" role="status">
                    <span className="sr-only">{t('cargando')}</span>
                </div>
            }>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                    <div className="container">
                        <a className="navbar-brand js-scroll-trigger" href="#page-top"><strong>{t('luisa')}</strong></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#images">{t('menu.imagenes')}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#welcomeinfo">{t('menu.proyecto')}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#help">{t('menu.instituciones')}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#privacy">{t('menu.privacidad')}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#about-us">{t('menu.quienes-somos')}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="https://cruzar.uy/" target="_blank"
                                       rel="noreferrer"><strong>{t('cruzar')}</strong></a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false">
                                        {t('menu.idioma')}
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item" onClick={() => this.changeLenguage('es')}>Español</a>
                                        </li>
                                        <li><a className="dropdown-item" onClick={() => this.changeLenguage('pt')}>Português</a>
                                        </li>
                                        <li><a className="dropdown-item" onClick={() => this.changeLenguage('en')}>English</a>
                                        </li>
                                        <li><a className="dropdown-item" onClick={() => this.changeLenguage('fr')}>Français</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <section className="text-black banner-background" id="page-top">
                    <IntroductionVis/>
                </section>

                <section id="images" className="parallax">
                    <Images/>
                </section>

                <section id="welcomeinfo" className="text-grey">
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
                        {/*<p className="m-0 text-center text-white">{t('footer.copyright')}</p>*/}
                    </div>
                </footer>
            </Suspense>
        </div>
    }
}

export default withTranslation()(App);
