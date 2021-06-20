function AboutUs() {

    return (
        <div className="container">
            <h2>Who we are</h2>

            <p className="lead"> We are professors, researchers, and students from the <u><a
                className="text-white"
                href="http://www.fiC.edu.uy">College of Communication (FIC)</a></u>and the <u><a className="text-white"
                                                                          href="http://www.fing.edu.uy">Engineering College</a></u>, as well as members of the organization of <u><a className="text-white" href="https://desaparecidos.org.uy/">Mothers
                and Families of Detained-Disappeared Uruguayans</a></u>.
                These groups collaborate to collect and process documents to make the information collected accesible to the public.</p>
            <p className="lead">In 2017, the <u><a className="text-white"
                                                                                                  href="http://www.universidad.edu.uy">University of the Republic's (UdelaR), </a></u>
																								  <u><a className="text-white"
                         href="http://www.extension.udelar.edu.uy/">Sectorial Commission on Extension and Activities in Media (CSEAM)</a></u> proposed an Extension Project
						to collect, process, and publicize the information contained in the unearthed documents.</p>
            <br/>
            <br/>


            <div id="accordion">
                <div className="card mb-4">
                    <div className="card-header banner-background" id="headingOne">
                        <h5 className="mb-0">
                            <button className="btn btn-link text-dark collapsed"
                                    data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false"
                                    aria-controls="collapseOne">
                                College of Communication (FIC)
                            </button>
                        </h5>

                    </div>
                    <div id="collapseOne" className="collapse show rgba-black-light white-text lead" aria-labelledby="headingOne"
                         data-parent="#accordion">
                        <div className="card-body parallax">
                            <b>Journalism Section:</b>
                            <ul>
                                <li>Adjunct Professor Samuel Blixen</li>
                                <li>Assistant Betania Núñez</li>
                            </ul>
                            <b>Source Documents, Resources and Services Departament:</b>
                            <ul>
                                <li>Adjunct Professor Fabián Hernández Muñiz</li>
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
                                Engineering College (FIng)
                            </button>
                        </h5>
                    </div>
                    <div id="collapseTwo" className="collapse lead" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body parallax">
                            <b>Computer Science Institute:</b>
                            <ul>
                                <li>Professor Emeritus Juan José Cabezas</li>
                                <li>Adjunct Professor Fernando Carpani</li>
                                <li>Adjunct Professor Lorena Etcheverry</li>
                            </ul>
                            <b>Electrical Engineering Institute:</b>
                            <ul>
                                <li>Titular Professor Gregory Randall</li>
                                <li>Adjunct Professor Ignacio Ramírez (Team Leader)</li>
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
                            <p><b>Mothers and Families of Detained-Disappeared Uruguayans</b></p>
                            <p>A group of mothers and family members of Uruguayans detained and/or disappeared who came together in 
							the 70’s to look for them, still hoping to find them alive. Since the democratic awakening, they walk together, 
							respecting the diversity of thought that defines them but united under their principal objectives: truth, justice, 
							memory, and the guarantee of non-repetition.</p>
                            <p><b>Working Group for Truth and Justice</b></p>
                            <p>From its founding on May 19, 2015 the Working Group for Truth and Justice has been dedicated to the investigation 
								of human rights abuses in which State agents activley participated, or were complicit. The Working Group's objective 
								is to shed light on these illegal acts of State terrorism and promote international standards of Truth, Justice,
								Memory, and the Guarantee of Non Repetition.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card mb-4">
                    <div className="card-header banner-background" id="headingFour">
                        <h5 className="mb-0">
                            <button className="btn btn-link  text-dark collapsed" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Supporting Resources
                            </button>
                        </h5>
                    </div>
                    <div id="collapseFour" className="collapse lead" aria-labelledby="headingFour" data-parent="#accordion">
                        <div className="card-body parallax">
                            <p>The LUISA Project relies on three million images from several sources including documents from the Naval Rifle Corps
								and the National Office of Information and Intelligence's Historical Archive.
                                The Project also has access to documentation recovered by the Working Group for Truth and Justice as a result of their                               Grupo de Trabajo por Verdad y Justicia y en el marco de las acciones de investigación e
                                interventions in several public archives.</p>
                            <p><b>Berrutti Archive</b></p>
                            <p> Thousands of microfilmed files were found in the Department of Defense, in the home of 
                                colonel Castiglioni, and in the Military's former Inteligence School. These documents were retrieved
								during the leadership of Secretary Azucena Berrutti.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

}

export default AboutUs;
