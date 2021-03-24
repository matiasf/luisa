import React from 'react';
import axios from 'axios';

class Images extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            blocks: [],
            loading: true,
            hashHoja: ''
        };

        this.sendRef = React.createRef()
    }

    htmlProcesarRequest = giro => {
        let formLuisa = '';
        this.state.blocks.map(block => {
            if (!block.context) {
                formLuisa += '&oldHash_' + (block.idx - 1) + '=' + block.hash;
                formLuisa += '&' + block.hash + '=' + block.value;
            }
        });

        formLuisa = 'hasCookies=' + navigator.cookieEnabled + '&hash_hoja=' + this.state.hashHoja + '&giroImg=' + giro + formLuisa;

        console.debug('formSend', formLuisa);
        axios.post(process.env.REACT_APP_NOT_BACKEND_URL + '/procesar', formLuisa)
            .then(res => {
                console.debug('Luisa responde:', res);
                this.refreshImages();
            })
            .catch(error => console.error('Error al enviar datos', error));
    }

    htmlMainRequest = () => {
        axios.get(process.env.REACT_APP_NOT_BACKEND_URL + '/docdic')
            .then(res => {
                if (res.data) {
                    const luisaDOM = window.$('<div></div>');
                    luisaDOM.html(res.data);
                    console.debug('Luisa DOM:', luisaDOM);

                    const blocks = window.$('.captcha-block.normalLayout', luisaDOM).map((idx, domElem) => {
                        console.debug('DOM element: ', domElem);
                        console.debug('DOM idx: ', idx);

                        console.debug('DOM b64img', window.$('img', domElem).attr('src').replace('data:image/gif;base64,', ''));
                        console.debug('DOM width', window.$('img', domElem).attr('width'));
                        console.debug('DOM hash', window.$('input.captcha', domElem).attr('name'));

                        return {
                            'hash': window.$('input.captcha', domElem).attr('name'),
                            'b64img': window.$('img', domElem).attr('src').replace('data:image/gif;base64,', ''),
                            'width': window.$('img', domElem).attr('width').replace('px', ''),
                            'context': false,
                            'idx': idx + 1,
                            'value': ''
                        }
                    }).toArray();

                    console.debug('Luisa muestra sin contexto:', blocks);

                    blocks.push({
                        'b64img': window.$('#figuron', luisaDOM).attr('src').replace('data:image/gif;base64,', ''),
                        'width': window.$('#figuron', luisaDOM).attr('width').replace('px', ''),
                        'context': true,
                        'idx': 0,
                        'value': ''
                    });

                    const variable = window.$("input[name='hash_hoja']", luisaDOM).val();

                    this.setState({
                        blocks: blocks,
                        loading: false,
                        hashHoja: variable
                    });
                    console.debug('Luisa muestra:', blocks);
                }
                console.debug('Luisa dice:', res);

            }).catch(error => console.error('Error obteniendo imagen', error));
    }

    csvMainRequest = () => {
        axios.get(process.env.REACT_APP_NOT_BACKEND_URL + '/main')
            .then(res => {
                if (res.data) {
                    const blocks = res.data.split('\n').slice(0, res.data.split('\n').length - 1).map((line, idx) => {
                        const strArr = line.split('\t');
                        return {
                            'hash': strArr[0],
                            'b64img': strArr[1],
                            'width': strArr[2],
                            'height': strArr[3],
                            'context': idx === 0,
                            'idx': idx,
                            'value': ''
                        }
                    });
                    this.setState({blocks: blocks, loading: false});
                    console.debug('Luisa muestra:', blocks);
                }
                console.debug('Luisa dice:', res);
            }).catch(error => console.error('Error obteniendo imagen', error));
    }

    csvProcesarRequest = giro => {
        let formLuisa = 'giroImg=' + giro;
        this.state.blocks.map(block => {
            if (block.context) {
                formLuisa += '&hash_hoja=' + block.hash;
            } else {
                formLuisa += '&oldHash_' + (block.idx - 1) + '=' + block.hash;
                formLuisa += '&' + block.hash + '=' + block.value;
            }
        })

        axios.post(process.env.REACT_APP_NOT_BACKEND_URL + '/procesar', formLuisa)
            .then(res => {
                console.debug('Luisa responde:', res);
                this.refreshImages();
            })
            .catch(error => console.error('Error al enviar datos', error));
    }

    refreshImages = () => {
        this.setState({loading: true})
        if (process.env.REACT_APP_INTEGRATION_MODE === 'CSV') {
            console.debug('Enviroment', process.env.REACT_APP_NOT_BACKEND_URL);
            this.csvMainRequest();
        } else if (process.env.REACT_APP_INTEGRATION_MODE === 'HTML') {
            console.debug('Enviroment', process.env.REACT_APP_NOT_BACKEND_URL);
            this.htmlMainRequest();
        } else {
            console.debug('Metodo de integracion desconocido', process.env.REACT_APP_INTEGRATION_MODE)
        }
    }

    sendDataToLuisa = giro => {
        if (process.env.REACT_APP_INTEGRATION_MODE === 'CSV') {
            console.debug('Enviroment', process.env.REACT_APP_NOT_BACKEND_URL);
            this.csvProcesarRequest(giro);
        } else if (process.env.REACT_APP_INTEGRATION_MODE === 'HTML') {
            console.debug('Enviroment', process.env.REACT_APP_NOT_BACKEND_URL);
            this.htmlProcesarRequest(giro);
        } else {
            console.debug('Metodo de integracion desconocido', process.env.REACT_APP_INTEGRATION_MODE)
        }
        this.sendRef.current.scrollIntoView();
    }

    handleTextInputValue = evt => {
        this.setState(state => {
            const list = state.blocks.map((block, idx) => {
                if (idx === evt.target.id) {
                    block.value = evt.target.value;
                }
                return block;
            });

            return {
                list,
            };
        });
    }

    handleSendDataToLuisa = () => {
        this.sendDataToLuisa(0);
    }

    handleSendGiradaToLuisa = () => {
        this.sendDataToLuisa(1);
    }

    componentDidMount() {
        this.refreshImages();
    }

    render() {
        console.debug('blocks before render', this.state.blocks);
        return <div ref={this.sendRef} className="container">
            <div className="row">
                <h1 className="text-center text-white col-lg-12">Imágenes</h1>

                <div className="col-lg-12">
                    <div className="row border border-white rounded m-3 bg-secondary">
                        {this.state.blocks.filter(block => !block.context).map(block => {
                                console.debug('Render block', block);
                                return (// <div className="col-md-3 d-flex align-items-start flex-column my-2" key={block.idx}>
                                    <div className="col-md-3 d-flex align-items-start flex-column my-2" key={block.idx}>
                                        <img className="img-fluid" alt="imagen_documento"
                                             src={'data:image/gif;base64,' + block.b64img}/>
                                        <hr/>
                                        {this.state.loading && (
                                            <div className="spinner-grow" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>)}
                                        {!this.state.loading && (
                                            <input className="form-control" rows="1" id={block.idx}
                                                      style={{width: block.width + 'px', overflowX: 'visible'}}
                                                      onChange={this.handleTextInputValue}/>
                                        )}
                                    </div>)
                            }
                        )}
                    </div>
                </div>

                {this.state.loading && (
                    <div className="captcha-form-controls col-md-12 d-flex justify-content-center">
                        <div className="spinner-border text-white"
                             style={{width: '3rem', height: '3rem', role: 'status'}}>
                        </div>
                        <span className="sr-only">Enviando datos...</span>
                    </div>)}
                {!this.state.loading && (
                    <div className="captcha-form-controls col-md-12 d-flex justify-content-center btn-toolbar">
                        <div className="btn-group mr-2">
                            <button className="btn btn-light btn-lg" id="enviar" onClick={this.handleSendDataToLuisa}>
                                Enviar datos
                            </button>
                        </div>

                        <div className="btn-group mr-2">
                            <button className="btn btn-light btn-lg" id="enviar" onClick={this.handleSendGiradaToLuisa}>
                                Imagen girada
                            </button>
                        </div>
                    </div>)}
            </div>

            <hr className="m-4"/>

            <div className="text-center text-white">
                <h2><strong>Contexto</strong></h2>
                {this.state.blocks.filter(block => block.context).map(block =>
                    <div className="col-md-12 d-flex justify-content-center" key={block.idx}>
                        <img className="img-fluid border border-dark rounded" alt="imagen_contexto"
                             src={'data:image/gif;base64,' + block.b64img}/>
                    </div>
                )}
            </div>
        </div>;
    }
}

export default Images;