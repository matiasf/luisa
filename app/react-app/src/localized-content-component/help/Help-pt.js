function HelpPt() {

    return (
        <div className="container">
            <h2>Instruções para a Transcrição de Imagens</h2>
            <p className="lead">
                Escreva o conteúdo de cada imagem no campo usando seu melhor critério e o contexto da imagem completa.


            </p>
            <div className="row">
                <div className="col-6 lead">
                    <h4>SIM, inclua os seguintes detalhes: </h4>
                    <div>
                        <ul>
                            <li>Maiúsculas e minúsculas
                            </li>
                            <li>Acentos, vírgulas e demais símbolos
                            </li>
                            <li>Na frente de cada palavra ilegível, coloque arroba (@)
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-6 lead">

                    <h4>NÃO inclua os seguintes detalhes:</h4>
                    <div>
                        <ul>

                            <li>Não incluir detalhes que não são texto (manchas, assinaturas, ou pontos de um formulário)
                            </li>
                            <li>Não incluir formatos ao texto (sublinhado, em negrito, em itálico ou manuscrito)
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

            <h4>Sobre o uso do Teclado e Mouse</h4>
            <div className="lead">
                <ul>
                    <li>
                        Pode enviar com o botão de "Enviar Dados" ou com a tecla "Enter".
                    </li>
                    <li>
                        Se houver mais de uma linha no bloco, use "Shift" e "Enter" simultaneamente para separar as linhas.
                    </li>
                    <li>
                        Se a imagem for muito grande, use a barra de deslocamento horizontal para ver a imagem completa.
                    </li>

                </ul>
            </div>

        </div>

    );

}

export default HelpPt;
