function WelcomeInfoEs() {

    return (
        <div className="container text-start">
            <h1 className="text-center alternate-font"><strong>LUISA</strong></h1>

            <p className="lead">La aplicación LUISA en homenaje a <u><a className="text-dark"
                                                                        href="https://es.wikipedia.org/wiki/Luisa_Cuesta">Luisa
                Cuesta</a></u>, es un esfuerzo colectivo para transcribir textos del período dictatorial y
                pre dictatorial uruguayo que por diversas razones es difícil
                transcribir de manera automática. El proyecto busca verdad y justicia sobre los actos de terrorismo de
                Estado.
            </p>
            <div className="row">
                <div className="col-lg-3">
                    <svg viewBox="0 0 50 50" width="100%" height="130"
                         fill="currentColor">
                        <circle cx="50%" cy="50%" r="50%" fill="grey"/>
                        <svg viewBox="0 -10 50 50" preserveAspectRatio="xMaxYMax meet" className="bi" width="100%"
                             height="100%"
                             fill="currentColor">
                            <use width="100%" height="65%" href="bootstrap-icons/bootstrap-icons.svg#receipt"/>
                        </svg>

                    </svg>

                    <h4 className="text-center">Recuperación de Archivos </h4>
                    <p className="lead"> Se recuperaron archivos de varias fuentes donde se almacena información sobre
                        la dictadura uruguaya incluyendo
                        procedimientos represivos, fichas policiales, informes, etc.</p>
                </div>
                <div className="col-lg-3">
                    <svg viewBox="0 0 50 50" width="100%" height="130"
                         fill="currentColor">
                        <circle cx="50%" cy="50%" r="50%" fill="rgb(239, 195, 74)"/>
                        <svg viewBox="0 -10 50 50" preserveAspectRatio="xMaxYMax meet" className="bi" width="100%"
                             height="100%"
                             fill="currentColor">
                            <use width="100%" height="65%" href="bootstrap-icons/bootstrap-icons.svg#pencil"/>
                        </svg>

                    </svg>

                    <h4 className="text-center">Transcripción de Imágenes</h4>
                    <p className="lead">Pedimos que nos ayude transcribiendo fotos de documentos, de la cual le
                        ofrecemos una porción que
                        contiene texto, símbolos o números.
                    </p>
                </div>
                <div className="col-lg-3">

                    <svg viewBox="0 0 50 50" width="100%" height="130"
                         fill="currentColor">
                        <circle cx="50%" cy="50%" r="50%" fill="grey"/>
                        <svg viewBox="0 -10 50 50" preserveAspectRatio="xMaxYMax meet" className="bi" width="100%"
                             height="100%"
                             fill="currentColor">
                            <use width="100%" height="65%" href="bootstrap-icons/bootstrap-icons.svg#braces"/>
                        </svg>

                    </svg>
                    <h4 className="text-center">Aplicación de Técnicas de Cruzamiento</h4>
                    <p className="lead">Se utilizan
                        técnicas de cruzamiento de información para procesar de manera automática y eficiente los
                        contenidos de los documentos digitalizados.
                    </p>
                </div>
                <div className="col-lg-3">
                    <svg viewBox="0 0 50 50" width="100%" height="130"
                         fill="currentColor">
                        <circle cx="50%" cy="50%" r="50%" fill="grey"/>
                        <svg viewBox="0 -10 50 50" preserveAspectRatio="xMaxYMax meet" className="bi" width="100%"
                             height="100%"
                             fill="currentColor">
                            <use width="100%" height="65%" href="bootstrap-icons/bootstrap-icons.svg#eyeglasses"/>
                        </svg>

                    </svg>

                    <h4 className="text-center">Análisis</h4>
                    <p className="lead">Los documentos se categorizan y analizan para el mejor entendimiento del funcionamiento
                        de la dictadura.</p>
                </div>
            </div>
            <p className="alternate-font text-center">
                <i><a className="text-dark" href="mailto:cruzar@fic.edu.uy?subject=Luisa: ">
                    contacto
                </a>{' / '}
                    <a className="text-dark" href="https://www.instagram.com/proyecto.luisa/?hl=es-la" target="_blank" rel="noreferrer">
                        instagram
                    </a></i>
            </p>

            <div className="text-center">
                <a className="btn btn-dark js-scroll-trigger" href="#images">¡A las imágenes!</a>
            </div>
        </div>

    );

}

export default WelcomeInfoEs;
