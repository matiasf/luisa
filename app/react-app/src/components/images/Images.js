import React from 'react';
import axios from 'axios';

class Images extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            blocks: [],
            loading: true
        };

        this.sendRef = React.createRef()
    }

    refreshImages = () => {
        this.setState({loading: true})
        axios.get('http://localhost:8000/main')
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
            }).catch(error => console.log('Error obteniendo imagen', error));
    }

    sendDataToLuisa = giro => {
        let formLuisa = '';
        formLuisa = 'giroImg=' + giro;
        this.state.blocks.map(block => {
            if (block.context) {
                formLuisa += '&hash_hoja=' + block.hash;
            } else {
                formLuisa += '&oldHash_' + (block.idx - 1) + '=' + block.hash;
                formLuisa += '&' + block.hash + '=' + block.value;
            }
        })

        axios.post('http://localhost:8000/procesar', formLuisa)
            .then(res => {
                console.debug('Luisa responde:', res);
                this.refreshImages();
            })
            .catch(error => console.log('Error al enviar datos', error));

        this.sendRef.current.scrollIntoView();
    }

    handleTextInputValue = evt => {
        this.setState(state => {
            const list = state.blocks.map((block, idx) => {
                if (idx === evt.target.id) {
                    block.value = evt.target.value;
                    return block;
                } else {
                    return block;
                }
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
        return <div ref={this.sendRef}>
            <div>
                <h1 className="text-center">Imágenes</h1>

                <br/>

                <div className="row border border-dark rounded m-3 bg-secondary">
                    {this.state.blocks.filter(block => !block.context).map(block =>
                        // <div className="col-md-3 d-flex align-items-start flex-column my-2" key={block.idx}>
                        <div className="col-md-3 d-flex align-items-start flex-column my-2" key={block.idx}>
                            <img className="img-fluid" alt="imagen_documento"
                                 src={'data:image/gif;base64,' + block.b64img}/>
                            <hr/>
                            {this.state.loading && (
                                <div className="spinner-grow" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>)}
                            {!this.state.loading && (
                                <textarea className="form-control" rows="1" id={block.idx}
                                          style={{width: block.width + 'px', overflowX: 'visible'}}
                                          onChange={this.handleTextInputValue}/>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <br/>

            {this.state.loading && (
                <div className="captcha-form-controls col-md-12 d-flex justify-content-center">
                    <div className="spinner-border" style={{width: '3rem', height: '3rem', role: 'status'}}>
                    </div>
                    <span className="sr-only">Enviando datos...</span>
                </div>)}
            {!this.state.loading && (
                <div className="captcha-form-controls col-md-12 d-flex justify-content-center">
                    <button className="btn btn-dark btn-lg" id="enviar" onClick={this.handleSendDataToLuisa}>
                        Enviar datos
                    </button>
                    <button className="btn btn-dark btn-lg" id="enviar" onClick={this.handleSendGiradaToLuisa}>
                        Imagen girada
                    </button>
                </div>)}


            <hr className="m-4"/>

            <div className="text-center">
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