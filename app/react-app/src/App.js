import IntroductionVis from './components/info/IntroductionVis';
import WelcomeInfo from './components/info/WelcomeInfo';
import Help from './components/info/Help';
import Privacy from './components/info/Privacy';
import AboutUs from './components/info/AboutUs';
import Images from './components/images/Images';

function App() {
    return (
        <div className="App">
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
                                <a className="nav-link js-scroll-trigger" href="#help">Instrucciones</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#privacy">Compromiso de Privacidad</a>
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

            <section className="text-white parallax">
                <WelcomeInfo/>
            </section>

            <section id="images">
                <Images/>
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
    );
}

export default App;
