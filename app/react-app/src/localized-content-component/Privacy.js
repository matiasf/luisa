import React from 'react';
import PrivacyEn from './privacy/Privacy-en';
import PrivacyEs from './privacy/Privacy-es';
import PrivacyFr from './privacy/Privacy-fr';
import PrivacyPt from './privacy/Privacy-pt';

import {useTranslation} from "react-i18next";

function Privacy() {

    const {i18n} = useTranslation();

    switch (i18n.language) {
        case 'es':
            return <PrivacyEs/>
        case 'en':
            return <PrivacyEn/>
        case 'fr':
            return <PrivacyFr/>
        case 'pt':
            return <PrivacyPt/>
        default:
            return (<div className="container">Contenido no traducido para {i18n.language}</div>)
    }

}

export default Privacy;
