function WelcomeInfo() {

    return (
        <div className="container text-center">
            <h1><strong>L</strong>eyendo <strong>U</strong>nidos para <strong>I</strong>nterpretar
                lo<strong>S</strong>{' '}
                <strong>A</strong>rchivos</h1>
            <p className="lead">Esta aplicación que llamamos Luisa en homenaje a <u><a className="text-white"
                                                                                       href="https://es.wikipedia.org/wiki/Luisa_Cuesta">Luisa
                Cuesta</a></u>, es un esfuerzo colectivo para transcribir texto que por diversas razones es difícil
                transcribir de manera automática. Puede ser material de archivo en mal estado o escrito a mano o con
                una máquina de escribir que generaba letras muy entintadas, etc.
            </p>
            <p className="lead">Al participar, usted está contribuyendo a la lucha contra la impunidad en el Uruguay. Se
                han recuperado
                varios archivos donde se almacena información que la dictadura uruguaya recabó y que incluye
                procedimientos represivos, fichas policiales, informes, etc. El <u><a className="text-white"
                                                                                      href="../mem/">Proyecto de
                    Sistematización, Cruzamiento y Análisis de los Archivos Militares</a></u> de la <u><a
                    className="text-white"
                    className="text-white"
                    href="http://www.udelar.edu.uy">Universidad
                    de la República</a></u>, en acuerdo con el Grupo de Trabajo por Verdad y Justicia y con la
                organización <u><a className="text-white" href="https://desaparecidos.org.uy/">Madres y Familiares de
                    Detenidos
                    Desaparecidos</a></u>,
                ha desarrollado este sistema para que entre todos ayudemos a convertir esos archivos en material que
                pueda ser procesado digitalmente.
            </p>
            <p className="lead">Trabajamos con una foto de un documento, de la cual le ofrecemos una porción que debe
                contener texto,
                símbolos o números. Puede aparecer también algo que no se entienda, que sea parte de un dibujo o de una
                firma, manchas, etc. Lo que le pedimos es que nos ayude transcribiendo lo que vea, sean números,
                letras o símbolos. En una ventana mostramos la zona en la cual aparece ese texto en el documento, a fin
                de que si tiene dificultades para interpretar, pueda ayudarse con el contexto.
            </p>
            <p className="lead">Cuando esté seguro/a de lo que escribió por favor oprima el botón enviar y se almacenará
                lo que usted
                escribió. Inmediatamente aparecerá en pantalla otra parte del texto para que siga ayudándonos.
            </p>
            <p className="lead">Puede transcribir tanto texto como quiera o pueda, entre más gente participe y más
                tiempo pasemos cada
                uno
                de nosotros trabajando en esto, más porciones de documentos serán transcritos y podremos utilizar
                técnicas de cruzamiento de información para ayudar a vencer la impunidad.
            </p>
            <p className="lead">Entre todos, cada quien a su ritmo, podemos ayudar a conocer la verdad.
            </p>
            <p className="lead">Muchas gracias por su tiempo y su colaboración!
            </p>
            <p className="lead">El equipo de trabajo.</p>
            <a className="btn btn-dark" href="#images">¡A las imágenes!</a>
        </div>
    );

}

export default WelcomeInfo;