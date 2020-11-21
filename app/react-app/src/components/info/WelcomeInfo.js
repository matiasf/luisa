function WelcomeInfo() {

    return (
        <div className="container text-left">
            <h1 className="text-center"><strong>LUISA</strong></h1>

            <p className="lead">La aplicación LUISA en homenaje a <u><a className="text-white"
                                                                        href="https://es.wikipedia.org/wiki/Luisa_Cuesta">Luisa
                Cuesta</a></u>, es un esfuerzo colectivo para transcribir textos del período dictatorial y
                pre dictatorial uruguayo que por diversas razones es difícil
                transcribir de manera automática. El proyecto busca verdad y justicia sobre los actos de terrorismo de
                Estado
                cometidos en nuestro pasado reciente, almacenando información a través de la digitalización de
                documentación e investigaciones en
                materia de graves violaciones a los derechos humanos cometidos.
            </p>
            <div className="row">
                <div className="col-3">

                    <svg viewBox="0 0 100 100" preserveAspectRatio="xMaxYMax meet" className="bi" width="200" height="200"
                         fill="currentColor">
                        <circle cx="50%" cy="50%" r="50%" fill="grey"/>

                        <use href="bootstrap-icons/bootstrap-icons.svg#receipt"/>

                    </svg>


                    <h4 className="text-center">Recuperación de Archivos </h4>
                    <p className="lead"> Se recuperaron archivos de varias fuentes donde se almacena información sobre
                        la dictadura uruguaya incluyendo
                        procedimientos represivos, fichas policiales, informes, etc.</p>
                </div>
                <div className="col-3 border border-white">
                    <h4 className="text-center">Transcripción de Imágenes</h4>
                    <p className="lead">Trabajamos con una foto de un documento, de la cual le ofrecemos una porción que
                        contiene texto,
                        símbolos o números. Pedimos que nos ayude transcribiendo lo que vea.
                    </p>
                </div>
                <div className="col-3">
                    <h4 className="text-center">Aplicación de Técnicas de Cruzamiento</h4>
                    <p className="lead">Se utilizan
                        técnicas de cruzamiento de información para ayudar a vencer la impunidad.
                    </p>
                </div>
                <div className="col-3">
                    <h4 className="text-center">Análisis</h4>
                    <p className="lead">Los documentos se categorizan y analisan para mejor entender el funcionamiento
                        de la dictadura.</p>
                </div>
            </div>
            <p className="lead">Entre todos, cada quien a su ritmo, podemos ayudar a conocer la verdad.
            </p>
            <p className="lead">¡Muchas gracias por su tiempo y su colaboración!
            </p>

            <p className="lead"><a href="mailto:cruzar@fic.edu.uy?subject=Luisa: ">cruzar@fic.edu.uy</a> | <a
                href="https://www.instagram.com/proyecto.luisa/?hl=es-la">Instagram</a>
            </p>
            <a className="btn btn-light" href="#images">¡A las imágenes!</a>
        </div>
    );

}

export default WelcomeInfo;