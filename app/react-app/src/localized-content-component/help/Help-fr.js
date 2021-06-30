function HelpFr() {

    return (
        <div className="container">
            <h2>Instructions de transcription d'images</h2>
            <p className="lead">
                Écrivez le contenu de chaque image dans la case. Utilisez votre meilleur jugement et le contexte de l'image
                complète.

            </p>
            <div className="row">
                <div className="col-6 lead">
                    <h4>INDIQUEZ les détails suivants:</h4>
                    <div>
                        <ul>
                            <li>Majuscules et minuscules
                            </li>
                            <li>Accents, virgules et autres symboles
                            </li>
                            <li>Avant chaque mot illisible, écrivez un arobase (@)
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-6 lead">

                    <h4>N'incluez PAS les détails suivants:</h4>
                    <div>
                        <ul>

                            <li>N'incluez pas de détails non textuels (taches, signatures ou points sur un formulaire)
                            </li>
                            <li>Ne pas inclure de formats au texte (souligné, en gras, en italique ou manuscrit)
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

            <h4>À propos de l’utilisation du clavier et de la souris</h4>
            <div className="lead">
                <ul>
                    <li>
                        Vous pouvez envoyer avec le bouton "Envoyer les données" ou avec la touche "Enter".
                    </li>
                    <li>
                        S'il s’agie de plus d'une ligne dans le bloc, utilisez simultanément "Shift" et "Enter" pour séparer les
                        lignes.
                    </li>
                    <li>
                        Si l'image est très grande, utilisez la barre de défilement horizontale pour visualiser l'image
                        complètement.
                    </li>

                </ul>
            </div>

        </div>

    );

}

export default HelpFr;
