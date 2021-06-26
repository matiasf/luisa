import React, {Suspense} from 'react';
import {withTranslation} from 'react-i18next'
import axios from 'axios';

class Images extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            blocks: [],
            loading: true,
            hashHoja: ''
        };

        this.sendRef = React.createRef();
    }

    componentDidMount() {
        this.csvMainRequest();
    }

    csvMainRequest = () => {
        console.debug('get to ', process.env.REACT_APP_NOT_BACKEND_URL_GET);
        axios.get(process.env.REACT_APP_NOT_BACKEND_URL_GET)
            .then(this.refreshImages).catch(error => console.error('Error obteniendo imagen', error));
    }

    csvProcesarRequest = giro => {
        let formLuisa = 'hasCookies=' + navigator.cookieEnabled + '&giroImg=' + giro + '&page_generation_timestamp=' + 0;
        this.state.blocks.forEach(block => {
            console.debug('block to send', block);
            if (block.context) {
                formLuisa += '&hash_hoja=' + block.hash;
            } else {
                formLuisa += '&oldHash_' + (block.idx - 1) + '=' + block.hash;
                formLuisa += '&' + block.hash + '=' + block.value;
            }
        });

        console.debug('post to ', process.env.REACT_APP_NOT_BACKEND_URL_POST);
        axios.post(process.env.REACT_APP_NOT_BACKEND_URL_POST, formLuisa)
            .then(this.refreshImages)
            .catch(error => console.error('Error al enviar datos', error));
    }

    refreshImages = res => {
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
    }

    sendDataToLuisa = giro => {
        this.setState({loading: true});
        this.csvProcesarRequest(giro);
        Array.from(document.querySelectorAll('input')).forEach(
            (input, index) => {
                input.value = '';
                console.debug('Clean');
                if (index === 0) {
                    console.debug('Autofocus');
                    input.focus();
                }
            }
        );
        this.sendRef.current.scrollIntoView();
    }

    handleTextInputValue = evt => {
        this.setState(state => {
            const list = state.blocks.map(block => {
                if (block.idx === Number(evt.target.id)) {
                    console.debug('on write value is set', evt.target.value);
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

    render() {
        const {t} = this.props;
        return <div ref={this.sendRef} className="container">
            <Suspense fallback={
                <div className="spinner-grow" role="status">
                    <span className="sr-only">{t('cargando')}</span>
                </div>
            }>
                <div className="row">
                    <h1 className="text-center text-white col-lg-12">{t('menu.imagenes')}</h1>

                    <div className="col-lg-12">
                        <div className="row border border-white rounded m-3 bg-secondary">
                            {this.state.blocks.filter(block => !block.context).map((block, index) => {
                                    return (
                                        <div className="col-md d-flex align-items-start flex-column my-2 overflow-auto"
                                             key={block.idx}>
                                            <img alt="imagen_documento" src={block.b64img}/>
                                            <hr/>
                                            <input className="form-control" id={block.idx} autoFocus={index === 0}
                                                   autoCapitalize="none"
                                                   autoCorrect="off"
                                                   autoComplete="off"
                                                   disabled={this.state.loading}
                                                   style={{
                                                       width: block.width + 'px',
                                                       overflowX: 'visible',
                                                       maxWidth: 'max-content'
                                                   }}
                                                   onChange={this.handleTextInputValue}
                                                   onKeyPress={e => {
                                                       if (e.charCode === 13) {
                                                           this.handleSendDataToLuisa();
                                                       }
                                                   }}/>
                                        </div>
                                    )
                                }
                            )}
                        </div>
                    </div>

                    {this.state.loading && (
                        <div className="captcha-form-controls col-md-12 d-flex justify-content-center">
                            <div className="spinner-border text-white"
                                 style={{width: '3rem', height: '3rem', role: 'status'}}>
                            </div>
                            <span className="sr-only"/>
                        </div>)}
                    {!this.state.loading && (
                        <div className="captcha-form-controls col-md-12 d-flex justify-content-center btn-toolbar">
                            <div className="btn-group me-2 p-1">
                                <button className="btn btn-light btn-lg" id="enviar" onClick={this.handleSendDataToLuisa}>
                                    {t('imagenes.enviar-datos')}
                                </button>
                            </div>

                            <div className="btn-group me-2 p-1">
                                <button className="btn btn-light btn-lg" id="enviar" onClick={this.handleSendGiradaToLuisa}>
                                    {t('imagenes.reportar')}
                                </button>
                            </div>
                        </div>)}
                </div>

                <hr className="m-4"/>

                <div className="text-center text-white">
                    <h2><strong>{t('imagenes.contexto')}</strong></h2>
                    {this.state.blocks.filter(block => block.context).map(block =>
                        <div className="col-md-12 d-flex justify-content-center" key={block.idx}>
                            <img className="img-fluid border border-dark rounded" alt="imagen_contexto" src={block.b64img}/>
                        </div>
                    )}
                </div>
            </Suspense>
        </div>;
    }
}

export default withTranslation()(Images);
