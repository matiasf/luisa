function AboutUs() {

    return (
        <div className="container">
            <h2>Quiénes Somos</h2>
            
			<p className="lead">En esta tarea se abocan docentes-investigadores y estudiantes de la <u><a
                className="text-white"
                href="http://www.fiC.edu.uy">Facultad
                de Información y Comunicación (FIC) </a></u>y de la <u><a className="text-white"
                                                                          href="http://www.fing.edu.uy">Facultad de
                Ingeniería (FIng), </a></u>sí como miembros de <u><a className="text-white" href="https://desaparecidos.org.uy/">Madres y Familiares</a></u>. 
				Sus objetivos, que en parte se concretan en este sitio,
                son desarrollar estrategias que permitan la conservación y organización de los documentos adquiridos y
                construir herramientas que faciliten el procesamiento de la información contenida en los
                documentos para su posterior divulgación, como contribución en la búsqueda de la verdad y la
                justicia.</p>
				
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
		data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
          Facultad de Información y Comunicación (FIC)
        </button>
      </h5>
             
            </div>
	<div id="collapseOne" className="collapse show rgba-black-light white-text lead" aria-labelledby="headingOne" data-parent="#accordion">
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
		data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
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
        <button className="btn btn-link  text-dark collapsed" data-toggle="collapse" 
		data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Organizaciones Vinculadas y Recursos de Apoyo
        </button>
      </h5>
    </div>
    <div id="collapseThree" className="collapse lead" aria-labelledby="headingThree" data-parent="#accordion">
      <div className="card-body parallax">
        <p>Madres y Familiares de Uruguayos Detenidos-Desaparecidos</p>
		<p>Grupo de Trabajo por Verdad y Justicia</p>
		<p><b>Archivo Berrutti</b>las tres millones de imágenes los
                documentos del Cuerpo de
                Fusileros Navales y el Archivo Histórico de la ex Dirección Nacional de Información e
                Inteligencia.
                También se suma a este proceso aquella documentación a la que se acceda a instancias del
                Grupo de Trabajo por Verdad y Justicia y en el marco de las acciones de investigación e
                intervención en los distintos archivos públicos.https://www.montevideo.com.uy/Noticias/Abrieron-el-archivo-Berrutti-encontrado-en-el-Ministerio-de-Defensa-en-2006-uc350124</p>
      </div>
    </div>
  </div>
</div>
			

            <br/>

            <div className="captcha-form-controls col-md-12 d-flex justify-content-center">
                <a className="btn btn-light btn-lg" href="https://forms.gle/XhaSyBFcWdVbtKtZA"
                   target="_blank">Encuesta sobre el sistema</a>
            </div>

        </div>
    );

}

export default AboutUs;