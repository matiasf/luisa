function WelcomeInfo() {

    return (
        <div className="container text-left">
            <h1 className="text-center"><strong>LUISA</strong></h1>

            <p className="lead">La aplicación LUISA en homenaje a <u><a className="text-white"
                                                                        href="https://es.wikipedia.org/wiki/Luisa_Cuesta">Luisa
                Cuesta</a></u>, es un esfuerzo colectivo para transcribir textos del período dictatorial y
                pre dictatorial uruguayo que por diversas razones es difícil
                transcribir de manera automática. El proyecto busca verdad y justicia sobre los actos de terrorismo de
                Estado.
            </p>
            <div className="row">
                <div className="col-3">

                    <svg viewBox="125 0 200 200" preserveAspectRatio="xMaxYMax meet" className="bi" width="100%"
                         height="20%"
                         fill="currentColor">
                        <circle cx="50%" cy="50%" r="50%" fill="grey"/>
                        <svg viewBox="0 -30 200 200" preserveAspectRatio="xMaxYMax meet" className="bi" width="100%"
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
                <div className="col-3 border border-white">
                    <svg viewBox="125 0 200 200" preserveAspectRatio="xMaxYMax meet" className="bi" width="100%"
                         height="20%"
                         fill="currentColor">
                        <circle cx="50%" cy="50%" r="50%" fill="grey"/>
                        <svg viewBox="0 -30 200 200" preserveAspectRatio="xMaxYMax meet" className="bi" width="100%"
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
                <div className="col-3">
                    <svg viewBox="125 0 200 200" preserveAspectRatio="xMaxYMax meet" className="bi" width="100%"
                         height="20%"
                         fill="currentColor">
                        <circle cx="50%" cy="50%" r="50%" fill="grey"/>
                        <svg viewBox="0 -30 200 200" preserveAspectRatio="xMaxYMax meet" className="bi" width="100%"
                             height="100%"
                             fill="currentColor">
                            <use width="100%" height="65%" href="bootstrap-icons/bootstrap-icons.svg#braces"/>
                        </svg>
                    </svg>

                    <h4 className="text-center">Aplicación de Técnicas de Cruzamiento</h4>
                    <p className="lead">Se utilizan
                        técnicas de cruzamiento de información para procesar de manera automatica y eficiente los
                        contenidos de los documentos digitalizados.
                    </p>
                </div>
                <div className="col-3">
                    <svg viewBox="125 0 200 200" preserveAspectRatio="xMaxYMax meet" className="bi" width="100%"
                         height="20%"
                         fill="currentColor">
                        <circle cx="50%" cy="50%" r="50%" fill="grey"/>
                        <svg viewBox="0 -30 200 200" preserveAspectRatio="xMaxYMax meet" className="bi" width="100%"
                             height="100%"
                             fill="currentColor">
                            <use width="100%" height="65%" href="bootstrap-icons/bootstrap-icons.svg#eyeglasses"/>
                        </svg>
                    </svg>

                    <h4 className="text-center">Análisis</h4>
                    <p className="lead">Los documentos se categorizan y analisan para mejor entender el funcionamiento
                        de la dictadura.</p>
                </div>
            </div>
            <p className="lead">Entre todos, cada quien a su ritmo, podemos ayudar a conocer la verdad.
            </p>
            <p className="lead">¡Muchas gracias por su tiempo y su colaboración!
            </p>

            <p className="lead"><a className="text-white" href="mailto:cruzar@fic.edu.uy?subject=Luisa: ">
                <svg viewBox="0 0 50 50" preserveAspectRatio="xMaxYMax meet" className="bi" width="4%" height="4%"
                     fill="currentColor">
                    <use width="100%" height="100%" href="bootstrap-icons/bootstrap-icons.svg#envelope"/>
                </svg>
            </a> |
                <a className="text-white"
                   href="https://www.instagram.com/proyecto.luisa/?hl=es-la">
                    <svg viewBox="0 0 50 50" preserveAspectRatio="xMaxYMax meet" className="bi" width="4%" height="4%"
                         fill="currentColor">
                        <use width="100%" height="100%" href="bootstrap-icons/bootstrap-icons.svg#camera"/>
                    </svg>
                </a>
            </p>
            <a className="btn btn-light js-scroll-trigger" href="#images">¡A las imágenes!</a>
        </div>
    );

}

export default WelcomeInfo;