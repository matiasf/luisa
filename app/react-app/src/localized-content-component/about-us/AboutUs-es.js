function AboutUs() {

    return (
        <div className="container">
            <h2>Quiene somos</h2>

            <p className="lead"> Abocamos docentes-investigadores y estudiantes de la <u><a
                className="text-white"
                href="http://www.fiC.edu.uy">Facultad
                de Información y Comunicación (FIC) </a></u>y de la <u><a className="text-white"
                                                                          href="http://www.fing.edu.uy">Facultad de
                Ingeniería (FIng)</a></u>, así como miembros de <u><a className="text-white" href="https://desaparecidos.org.uy/">Madres
                y Familiares de Uruguayos Detenidos-Desaparecidos</a></u>.
                Dichos grupos, a traves del desarrollo de estrategias y herramientas de procesiamiento de datos, buscamos divulgar
                la informacion recabada.</p>
            <p className="lead">En el marco del llamado 2017 a Proyectos de Extensión que emitió
                la <u><a className="text-white"
                         href="http://www.extension.udelar.edu.uy/">Comisión
                    Sectorial de Extensión y Actividades con el Medio (CSEAM) </a></u>de la <u><a className="text-white"
                                                                                                  href="http://www.universidad.edu.uy">Universidad
                    de la República (UdelaR), </a></u>comenzó a funcionar este proyecto de sistematización,
                tratamiento y difusión de la
                información contenida en los documentos recuperados.</p>

            <br/>
            <br/>


            <div id="accordion">
                <div className="card mb-4">
                    <div className="card-header banner-background" id="headingOne">
                        <h5 className="mb-0">
                            <button className="btn btn-link text-dark collapsed"
                                    data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false"
                                    aria-controls="collapseOne">
                                Facultad de Información y Comunicación (FIC)
                            </button>
                        </h5>

                    </div>
                    <div id="collapseOne" className="collapse show rgba-black-light white-text lead" aria-labelledby="headingOne"
                         data-parent="#accordion">
                        <div className="card-body parallax">
                            <b>Sección Periodismo:</b>
                            <ul>
                                <li>Profesor Adjunto Samuel Blixen</li>
                                <li>Asistente Betania Núñez</li>
                            </ul>
                            <b>Departamento de Fuentes Documentales, Recursos y Servicios:</b>
                            <ul>
                                <li>Profesor Adjunto Fabián Hernández Muñiz</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card mb-4">
                    <div className="card-header banner-background" id="headingTwo">
                        <h5 className="mb-0">
                            <button className="btn btn-link  text-dark collapsed"
                                    data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                    aria-controls="collapseTwo">
                                Facultad de Ingeniería (FIng)
                            </button>
                        </h5>
                    </div>
                    <div id="collapseTwo" className="collapse lead" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body parallax">
                            <b>Instituto de Computación:</b>
                            <ul>
                                <li>Profesor Emérito Juan José Cabezas</li>
                                <li>Profesor Adjunto Fernando Carpani</li>
                                <li>Profesora Adjunta Lorena Etcheverry</li>
                            </ul>
                            <b>Instituto de Ingeniería Eléctrica:</b>
                            <ul>
                                <li>Profesor Titular Gregory Randall</li>
                                <li>Profesor Adjunto Ignacio Ramírez (Coordinador del equipo)</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card mb-4">
                    <div className="card-header banner-background" id="headingThree">
                        <h5 className="mb-0">
                            <button className="btn btn-link  text-dark collapsed" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Organizaciones Vinculadas
                            </button>
                        </h5>
                    </div>
                    <div id="collapseThree" className="collapse lead" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="card-body parallax">
                            <p><b>Madres y Familiares de Uruguayos Detenidos-Desaparecidos</b></p>
                            <p>Un grupo de madres y familiares de uruguayos detenidos desaparecidos que
                                desde los años ´70 empezaron a juntarse para buscarlos, aún con la esperanza de
                                encontrarlos vivos. Desde la apertura democrática caminan juntos respetando
                                la diversidad de pensamientos que los caracteriza pero unidos en torno a sus principales
                                objetivos: Verdad, justicia, memoria y nunca más.</p>
                            <p><b>Grupo de Trabajo por Verdad y Justicia</b></p>
                            <p>Desde el momento de su creación el 19 de
                                mayo de 2015 el Grupo de Trabajo por Verdad y Justicia investiga los crímenes de lesa humanidad
                                cometidos por agentes del Estado o contando con su complicidad, durante el
                                período de actuación ilegal o en su fase terrorista.
                                El Grupo se constituyó para contribuir en dar luz a tan graves hechos en
                                pos de la verdad histórica y promover la justicia en el marco del Estado de
                                Derecho sobre la base de estándares internacionales de Verdad, Justicia,
                                Memoria y Garantías de No Repetición.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card mb-4">
                    <div className="card-header banner-background" id="headingFour">
                        <h5 className="mb-0">
                            <button className="btn btn-link  text-dark collapsed" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Recursos de Apoyo
                            </button>
                        </h5>
                    </div>
                    <div id="collapseFour" className="collapse lead" aria-labelledby="headingFour" data-parent="#accordion">
                        <div className="card-body parallax">
                            <p>Las tres millones de imágenes con las que cuenta el Proyecto LUISA provienen de una variedad de
                                fuentes incluyendo
                                los documentos del Cuerpo de Fusileros Navales y el Archivo Histórico de la ex Dirección Nacional
                                de Información e
                                Inteligencia.
                                También se suma a este proceso aquella documentación a la que se acceda a instancias del
                                Grupo de Trabajo por Verdad y Justicia y en el marco de las acciones de investigación e
                                intervención en los distintos archivos públicos.</p>
                            <p><b>Archivo Berrutti</b></p>
                            <p> Miles de archivos microfilmados que fueron encontrados en el Ministerio de Defensa, en la casa del
                                coronel Castiglioni, y en la ex Escuela de Inteligencia del Ejército. Se recolectaron durante la
                                gestión de la ministra Azucena Berrutti.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

}

export default AboutUs;
