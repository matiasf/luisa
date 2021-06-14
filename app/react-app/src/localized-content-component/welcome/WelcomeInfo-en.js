function WelcomeInfoEn() {

    return (
        <div className="container text-start">
            <h1 className="text-center alternate-font"><strong>LUISA</strong></h1>

            <p className="lead">The Luisa application, in homage to <u><a className="text-dark"
                                                                        href="https://es.wikipedia.org/wiki/Luisa_Cuesta">Luisa
                Cuesta</a></u>, is a collaborative project with the objective of transcribing texts from the period previous to, and during the 
				Uruguayan dictatorship, which for several reasons may be difficult to transcribe automatically. The project seeks to contribute to 
				the search for truth and justice regarding the acts of State terrorism.
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

                    <h4 className="text-center">Archive Recovery</h4>
                    <p className="lead"> Retrieval from several sources of documents that store information about the Uruguayan
                        dictatorship including repressive regimes, police files, reportes, etc.</p>
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

                    <h4 className="text-center">Image Transcription</h4>
                    <p className="lead">We ask volunteers to transcribe pictures of documents, of which we provide a portion of the text,
						symbols or numbers.
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

                    <h4 className="text-center">Analysis</h4>
                    <p className="lead">The documents are categorized and analyzed to better understand the structure and operation
					of the dictatorship.</p>
                </div>
            </div>
            <p className="alternate-font text-center">
                <i><a className="text-dark" href="mailto:cruzar@fic.edu.uy?subject=Luisa: ">
                    contact
                </a>{' / '}
                    <a className="text-dark" href="https://www.instagram.com/proyecto.luisa/?hl=es-la" target="_blank">
                        instagram
                    </a></i>
            </p>

            <div className="text-center">
                <a className="btn btn-dark js-scroll-trigger" href="#images">To the images!</a>
            </div>
        </div>

    );

}

export default WelcomeInfoEn;
