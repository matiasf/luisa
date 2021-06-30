function WelcomeInfoFr() {

    return (
        <div className="container text-start">
            <h1 className="text-center alternate-font"><strong>LUISA</strong></h1>

            <p className="lead">L'application LUISA est un hommage à <u><a className="text-dark"
                                                                           href="https://es.wikipedia.org/wiki/Luisa_Cuesta">Luisa
                Cuesta</a></u>, Il s'agit d'un effort collectif pour transcrire des textes de la période dictatoriale et
                prédictatoriale uruguayenne qui, pour diverses raisons, est difficile à transcrire automatiquement. Le projet
                cherche la vérité et la justice sur les actes de terrorisme d'État.
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

                    <h4 className="text-center">Récupération des fichiers</h4>
                    <p className="lead">Des fichiers ont été récupérés à partir de diverses sources où ils sont stockées des
                        informations sur la dictature uruguayenne, notamment des procédures répressives, des dossiers de police,
                        des rapports, etc.</p>
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

                    <h4 className="text-center">Transcription d'images</h4>
                    <p className="lead">Nous vous demandons de nous aider a transcrire des photos de documents. Ces photos
                        contiennent des textes, des symboles ou des chiffres.
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
                    <h4 className="text-center">Application des techniques de fusión/croisement</h4>
                    <p className="lead">Les techniques de croisement d'informations sont utilisées pour traiter automatiquement et
                        efficacement le contenu des documents numérisés.
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

                    <h4 className="text-center">Analyse</h4>
                    <p className="lead">Les documents sont catégorisés et analysés pour une meilleure compréhension du
                        fonctionnement de la dictature.</p>
                </div>
            </div>
            <p className="alternate-font text-center">
                <i><a className="text-dark" href="mailto:cruzar@fic.edu.uy?subject=Luisa: ">
                    contact
                </a>{' / '}
                    <a className="text-dark" href="https://www.instagram.com/proyecto.luisa/?hl=es-la" target="_blank"
                       rel="noreferrer">
                        instagram
                    </a></i>
            </p>

            <div className="text-center">
                <a className="btn btn-dark js-scroll-trigger" href="#images">Aux images!</a>
            </div>
        </div>

    );

}

export default WelcomeInfoFr;
