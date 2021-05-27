import React from 'react';
import WelcomeInfoEn from './welcome/WelcomeInfo-en';
import WelcomeInfoEs from './welcome/WelcomeInfo-es';
import WelcomeInfoFr from './welcome/WelcomeInfo-fr';
import WelcomeInfoPt from './welcome/WelcomeInfo-pt';

import {useTranslation} from "react-i18next";

function WelcomeInfo() {

    const {i18n} = useTranslation();

    switch (i18n.language) {
        case 'es':
            return <WelcomeInfoEs/>
        case 'en':
            return <WelcomeInfoEn/>
        case 'fr':
            return <WelcomeInfoFr/>
        case 'pt':
            return <WelcomeInfoPt/>
        default:
            return (<div className="container">Contenido no traducido para {i18n.language}</div>)
    }

}

export default WelcomeInfo;
