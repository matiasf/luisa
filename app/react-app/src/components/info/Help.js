function Help() {

    return (
        <div className="container">
            <h2>Instrucciones</h2>
            <p className="lead">
                Escriba el contenido de cada imagen en el recuadro que se muestra encima de ella, respetando las
                mayúsculas y
                minúsculas y siguiendo estas instrucciones:
            </p>
            <div>
                <ul>
                    <li>Escriba todo lo que lee: incluya acentos, comas y demás símbolos legibles en su respuesta.
                    </li>
                    <li>Si la imagen muestra texto que no es legible, escriba un símbolo arroba (@).</li>
                    <li> Si algunas de las palabras o números de la imagen no son legibles, pero otras si, escriba
                        lo que se pueda leer y
                        utilice un símbolo arroba (@) en la posición de cada palabra ilegible.
                    </li>
                    <li> Si la imagen muestra algo que no es texto (son manchas, firmas, o puntos de un formulario),
                        deje el campo vacío.
                    </li>
                    <li>Si la imagen muestra texto con formato (subrayado, en negrita, en itálica o manuscrito),
                        ingréselo sin preocuparse del
                        formato.
                    </li>
                    <li>En la sección Contexto se muestra la imagen completa para ayudar a comprender el
                        contenido.
                    </li>
                </ul>
                Sobre el uso del Teclado y Mouse
                <br/>
                <div>
                    <ul>
                        <li>
                            Puede avanzar de un cuadro al siguiente con la tecla "tab" (<i
                            className="fa fa-arrow-right" aria-hidden="true"/>|) o haciendo "click" con el botón
                            izquierdo del ratón en el cuadro que desea rellenar.
                        </li>
                        <li>
                            Puede enviar con el botón de "enviar" o con la tecla enter.
                        </li>
                        <li>
                            Si hay más de una linea en el bloque, use shift simultáneamente con Enter para separar
                            las líneas.
                        </li>
                        <li>
                            Si la imagen es muy grande, aparecerá una barra de desplazamiento horizontal que Ud.
                            puede usar para ver la imagen completamente.
                        </li>

                    </ul>
                </div>
            </div>
            <div>Por cualquier duda o inconveniente, envíe un mail a <a
                href="mailto:cruzar@fic.edu.uy?subject=Luisa: ">cruzar@fic.edu.uy</a></div>

        </div>
    );

}

export default Help;