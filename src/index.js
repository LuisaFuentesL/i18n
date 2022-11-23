import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";


import JobsList from "./components/jobslist"
alert (window.navigator.language);
if (window.navigator.language === 'es-ES') {
    ReactDOM.render(
        
        <IntlProvider locale="es-ES" messages= {localeEsMessages}>
                <JobsList/>
        </IntlProvider>, document.getElementById("root")
    );}
else{
    ReactDOM.render(
        
        <IntlProvider locale="en-US" messages= {localeEnMessages}>
                <JobsList/>
        </IntlProvider>, document.getElementById("root")
    );  
}