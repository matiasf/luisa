import React from 'react';
import AboutUsEn from './about-us/AboutUs-en';
import AboutUsEs from './about-us/AboutUs-es';
import AboutUsFr from './about-us/AboutUs-fr';
import AboutUsPt from './about-us/AboutUs-pt';

import {useTranslation} from "react-i18next";

function AboutUs() {

    const {i18n} = useTranslation();

    switch (i18n.language) {
        case 'es':
            return <AboutUsEs/>
        case 'en':
            return <AboutUsEn/>
        case 'fr':
            return <AboutUsFr/>
        case 'pt':
            return <AboutUsPt/>
        default:
            return (<div className="container">Contenido no traducido para {i18n.language}</div>)
    }

}

export default AboutUs;
