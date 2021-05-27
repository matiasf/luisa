import './introductino-vis.css';
import {useTranslation} from 'react-i18next'

function IntroductionVis() {
    const {t} = useTranslation();

    return (
        <div className="text-right">
            <div className="row">
                <div className="col-md-4">
                    <img className="img-fluid" alt="luisa dibujo" src="luisa-theme/luisa_dibujo_mediano.png"/>
                </div>

                <div className="col-md-8">
                    <h1 className="alternate-font display-1 font-weight-bolder"><strong>{t('luisa')}</strong></h1>
                    <h3 className="alternate-font">{t('intro.leyendo-unidos')}</h3>
                    <h3 className="alternate-font">{t('intro.interpretar')}</h3>
                    <div>
                    </div>
                    <a className="btn btn-light js-scroll-trigger" href="#images">{t('intro.imagenes')}</a>
                </div>
            </div>
        </div>
    );

}

export default IntroductionVis;
