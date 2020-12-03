import './introductino-vis.css';

function IntroductionVis() {

    return (
        <div className="text-right">
            <div className="row">
                <div className="col-md-4">
                    <img className="rounded float-left" alt="luisa dibujo" src="luisa-theme/luisa_dibujo_mediano_1.png"/>
                </div>

                <div className="col-md-8">
                    <h1 className="alternate-font display-1 font-weight-bolder"><strong>Luisa</strong></h1>
                    <h3 className="alternate-font">Leyendo Unidos para</h3>
                    <h3 className="alternate-font">Interpretar loS Archivos</h3>

                    <a className="btn btn-light js-scroll-trigger" href="#images">¡A las imágenes!</a>
                </div>
            </div>
        </div>
    );

}

export default IntroductionVis;