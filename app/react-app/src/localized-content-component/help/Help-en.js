function HelpEn() {

    return (
        <div className="container">
            <h2>Instructions for Transcribing the Images</h2>
            <p className="lead">
                Type the content of each image in the box using your best judgement and the context provided by the image showing
                the complete text.

            </p>
            <div className="row">
                <div className="col-6 lead">
                    <h4>DO include the following details: </h4>
                    <div>
                        <ul>
                            <li>Uppercase and lowercase letters
                            </li>
                            <li>Accents, commas, and other symbols
                            </li>
                            <li>Before each illegible word, type the @ symbol
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-6 lead">

                    <h4>DO NOT include the following details: </h4>
                    <div>
                        <ul>

                            <li>Do not include non-text details (blotches and stains, signatures, or bullet points)
                            </li>
                            <li>Do not include text formats (underlines, bold, italics, or fonts)
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

            <h4>Regarding Keyboard and Mouse Usage</h4>
            <div className="lead">
                <ul>
                    <li>
                        Save and store complete work by clicking the "Send Data" button or using the "Enter" key.
                    </li>
                    <li>
                        If there is more than one line in the text block, use "Shift" and "Enter" simultaneously to separate the
                        lines.
                    </li>
                    <li>
                        If the image is too large, use the horizontal scroll bar to view the full image.
                    </li>

                </ul>
            </div>

        </div>

    );

}

export default HelpEn;
