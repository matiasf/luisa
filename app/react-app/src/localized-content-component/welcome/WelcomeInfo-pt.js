function WelcomeInfoEn() {

    return (
        <div className="container text-start">
            <h1 className="text-center alternate-font"><strong>LUISA</strong></h1>

         
			<p className="lead">O aplicativo LUISA em homenagem a <u><a className="text-dark" href="https://es.wikipedia.org/wiki/Luisa_Cuesta">Luisa 
			Cuesta</a></u>, é um esforço coletivo para transcrever textos do período ditatorial e pré ditatorial uruguaio, que por diversos motivos é difícil de transcrever de forma automática. O projeto busca verdade e justiça sobre os atos de terrorismo de Estado.
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

                    <h4 className="text-center">Recuperação de Arquivos</h4>
                    <p className="lead"> Foram recuperados arquivos de várias fontes onde se armazena informação sobre a ditadura uruguaia, incluindo procedimentos repressivos, fichas policiais, informes, etc.</p>
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

                    <h4 className="text-center">Transcrição de Imagens</h4>
                    <p className="lead">Pedimos que nos ajude a transcrever fotos de documentos, da qual lhe oferecemos uma parte que contém texto, símbolos ou números.
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
                    <h4 className="text-center">Aplicação de Técnicas de Cruzamento</h4>
                    <p className="lead">Se utilizam técnicas de cruzamento de informações para processar de forma automática e eficiente os conteúdos dos documentos digitalizados
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

                    <h4 className="text-center">Análises</h4>
                    <p className="lead">Os documentos são classificados e analisados para uma melhor compreensão sobre o funcionamento da ditadura.</p>
                </div>
            </div>
            <p className="alternate-font text-center">
                <i><a className="text-dark" href="mailto:cruzar@fic.edu.uy?subject=Luisa: ">
                    contacto
                </a>{' / '}
                    <a className="text-dark" href="https://www.instagram.com/proyecto.luisa/?hl=es-la" target="_blank">
                        instagram
                    </a></i>
            </p>

            <div className="text-center">
                <a className="btn btn-dark js-scroll-trigger" href="#images">¡Para as imagens!</a>
            </div>
        </div>

    );

}

export default WelcomeInfoEn;
