import React from 'react';
import HelpEn from './help/Help-en';
import HelpEs from './help/Help-es';
import HelpFr from './help/Help-fr';
import HelpPt from './help/Help-pt';

import {useTranslation} from "react-i18next";

function Help() {

    const {i18n} = useTranslation();

    switch (i18n.language) {
        case 'es':
            return <HelpEs/>
        case 'en':
            return <HelpEn/>
        case 'fr':
            return <HelpFr/>
        case 'pt':
            return <HelpPt/>
        default:
            return (<div className="container">Contenido no traducido para {i18n.language}</div>)
    }

}

export default Help;
