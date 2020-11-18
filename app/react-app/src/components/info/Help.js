function Help() {

    return (
        <div className="container">
            <h2>Instrucciones</h2>
            <p className="lead">
                Escriba el contenido de cada imagen en el recuadro usando su mejor criterio y el contexto de la imagen
                completa.

            </p>
            <div className="row">
                <div className="col-6">
                    <h4>SÍ incluya los siguientes detalles: </h4>
                    <div>
                        <ul>
                            <li>Mayúsculas y minúsculas
                            </li>
                            <li>Acentos, comas y demás símbolos
                            </li>
                            <li>Antes de cada palabra ilegible, escriba un símbolo arroba (@)
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-6">

                    <h4>NO incluya los siguientes detalles: </h4>
                    <div>
                        <ul>

                            <li>Detalles que no son texto (manchas, firmas, o puntos de un formulario)
                            </li>
                            <li>Formatos al texto (subrayado, en negrita, en itálica o manuscrito)
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

            <h4>Sobre el uso del Teclado y Ratón</h4>
            <div>
                <ul>
                    <li>
                        Puede enviar con el botón de "Enviar Datos" o con la tecla "Enter".
                    </li>
                    <li>
                        Si hay más de una linea en el bloque, use "Shift" y "Enter" simultáneamente para separar
                        las líneas.
                    </li>
                    <li>
                        Si la imagen es muy grande, use la barra de desplazamiento horizontal para ver la imagen
                        completamente.
                    </li>

                </ul>
            </div>

        </div>

    );

}

export default Help;