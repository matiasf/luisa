import React from 'react';
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
        this.refreshImages();
    }

    csvMainRequest = () => {
        console.debug('get to ', process.env.REACT_APP_NOT_BACKEND_URL_GET);
        axios.get(process.env.REACT_APP_NOT_BACKEND_URL_GET)
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
        let formLuisa = 'hasCookies=' + navigator.cookieEnabled + '&giroImg=' + giro + '&page_generation_timestamp=' + 0;
        this.state.blocks.map(block => {
            console.debug('block to send', block);
            if (block.context) {
                formLuisa += '&hash_hoja=' + block.hash;
            } else {
                formLuisa += '&oldHash_' + (block.idx - 1) + '=' + block.hash;
                formLuisa += '&' + block.hash + '=' + block.value;
            }
        })

        console.debug('post to ', process.env.REACT_APP_NOT_BACKEND_URL_POST);
        axios.post(process.env.REACT_APP_NOT_BACKEND_URL_POST, formLuisa)
            .then(res => {
                console.debug('Luisa responde:', res);
                this.refreshImages();
            })
            .catch(error => console.error('Error al enviar datos', error));
    }

    refreshImages = () => {
        this.csvMainRequest();
    }

    sendDataToLuisa = giro => {
        this.setState({loading: true});
        this.csvProcesarRequest(giro);
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
            <div className="row">
                <h1 className="text-center text-white col-lg-12">{t('menu.imagenes')}</h1>

                <div className="col-lg-12">
                    <div className="row border border-white rounded m-3 bg-secondary">
                        {this.state.blocks.filter(block => !block.context).map((block, index) => {
                                return (
                                    <div className="col-md-3 d-flex align-items-start flex-column my-2" key={block.idx}>
                                        <img className="img-fluid" alt="imagen_documento"
                                             src={block.b64img}/>
                                        <hr/>
                                        {this.state.loading && (
                                            <div className="spinner-grow" role="status">
                                                <span className="sr-only">{t('cargando')}</span>
                                            </div>)}
                                        {!this.state.loading && (
                                            <input className="form-control" id={block.idx} autoFocus={index === 0}
                                                   style={{width: block.width + 'px', overflowX: 'visible', maxWidth: 'max-content'}}
                                                   onChange={this.handleTextInputValue}
                                                   onKeyPress={e => {
                                                       if (e.charCode === 13) {
                                                           this.handleSendDataToLuisa();
                                                       }
                                                   }}/>
                                        )}
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
                        <span className="sr-only">{t('imagenes.envio-datos')}</span>
                    </div>)}
                {!this.state.loading && (
                    <div className="captcha-form-controls col-md-12 d-flex justify-content-center btn-toolbar">
                        <div className="btn-group mr-2">
                            <button className="btn btn-light btn-lg" id="enviar" onClick={this.handleSendDataToLuisa}>
                                {t('imagenes.enviar-datos')}
                            </button>
                        </div>

                        <div className="btn-group mr-2">
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
        </div>;
    }
}

export default withTranslation(Images);
